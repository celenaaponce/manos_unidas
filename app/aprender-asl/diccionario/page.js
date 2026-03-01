"use client";

import styles from "./page.module.css";
import FlashcardList from "components/flashcards/flashcardList";
import LoadingIndicator from "components/loadingInfo/LoadingIndicator";
import themes from "../../../data/dictionary-themes.json";
import { useEffect, useState } from "react";

export default function DiccionarioPage() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const [videoUrl, setVideoUrl] = useState(null);

  const PAGE_SIZE = 50;

  /*
  ========================
  YOUTUBE EMBED HANDLING
  ========================
  */

  function getEmbedUrl(link) {
    if (!link) return "";

    let videoId = "";

    if (link.includes("youtu.be/")) {
      videoId = link.split("youtu.be/")[1].split("?")[0];
    } else if (link.includes("watch?v=")) {
      videoId = link.split("watch?v=")[1].split("&")[0];
    } else if (link.includes("shorts/")) {
      videoId = link.split("shorts/")[1].split("?")[0];
    } else if (link.includes("embed/")) {
      videoId = link.split("embed/")[1].split("?")[0];
    }

    if (!videoId) return "";

    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  }

  function handleWatch(link) {
    const embed = getEmbedUrl(link);
    if (embed) setVideoUrl(embed);
  }

  /*
  ========================
  SEARCH FUNCTION
  ========================
  */

  async function performSearch(
    searchQuery,
    searchTheme,
    startCursor = null,
    append = false,
  ) {
    setLoading(true);

    try {
      const params = new URLSearchParams();

      if (searchQuery) params.append("query", searchQuery);
      if (searchTheme) params.append("theme", searchTheme);
      if (startCursor) params.append("cursor", startCursor);

      params.append("page_size", PAGE_SIZE);

      const response = await fetch(
        `/aprender-asl/diccionario/api/search?${params}`,
      );

      const data = await response.json();

      const items = data.results
        .map((row) => ({
          id: row.id,
          word: row.properties.Word.title?.[0]?.plain_text || "",

          themes: row.properties.Themes.multi_select.map((t) => t.name),

          image:
            row.properties.Picture.files?.[0]?.file?.url ||
            row.properties.Picture.files?.[0]?.external?.url ||
            "",

          link: row.properties.YoutubeLink?.url || "",

          synonyms: row.properties.Synonyms.rich_text.map((t) => t.plain_text),
        }))
        // ✅ FILTER OUT ENTRIES WITHOUT VIDEO
        .filter((item) => item.link && item.link.trim() !== "");

      if (append) {
        setResults((prev) => [...prev, ...items]);
      } else {
        setResults(items);
      }

      setCursor(data.next_cursor);
      setHasMore(data.has_more);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    }

    setLoading(false);
    setInitialized(true);
  }

  /*
  ========================
  INITIAL LOAD
  ========================
  */

  useEffect(() => {
    performSearch("", "", null, false);
  }, []);

  /*
  ========================
  SEARCH CHANGE (DEBOUNCE)
  ========================
  */

  useEffect(() => {
    const timeout = setTimeout(() => {
      performSearch(query, theme, null, false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, theme]);

  /*
  ========================
  LOAD MORE
  ========================
  */

  function loadMore() {
    performSearch(query, theme, cursor, true);
  }

  /*
  ========================
  UI
  ========================
  */

  return (
    <div>
      {/* SEARCH CONTROLS */}
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar palabra..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className={styles.filterSelect}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="">Todos los temas</option>

          {themes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* RESULT COUNT */}
      {initialized && !loading && (query.trim() !== "" || theme !== "") && (
        <div className={styles.resultCount}>
          {results.length} palabra
          {results.length !== 1 && "s"}
        </div>
      )}

      {/* LOADING */}
      {loading && results.length === 0 && <LoadingIndicator />}

      {/* FLASHCARDS */}
      {!loading && results.length > 0 && (
        <FlashcardList flashcards={results} onWatch={handleWatch} />
      )}

      {/* LOAD MORE */}
      {!loading && hasMore && (
        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreButton} onClick={loadMore}>
            Cargar más
          </button>
        </div>
      )}

      {/* NO RESULTS */}
      {initialized && !loading && results.length === 0 && (
        <div className={styles.resultCount}>No se encontraron resultados</div>
      )}

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div
          onClick={() => setVideoUrl(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "95%",
              maxWidth: "900px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setVideoUrl(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="500"
              src={videoUrl}
              title="Video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
