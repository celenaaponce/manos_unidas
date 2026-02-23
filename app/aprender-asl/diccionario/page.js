"use client";

import styles from "./page.module.css";
import FlashcardList from "components/flashcards/flashcardList";
import LoadingIndicator from "components/loadingInfo/LoadingIndicator";
import { useEffect, useState } from "react";

export default function DiccionarioPage() {

  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("");

  const [results, setResults] = useState([]);
  const [themes, setThemes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  const PAGE_SIZE = 50;

  /*
  LOAD THEMES
  */
  useEffect(() => {

    async function loadThemes() {

      try {

        const response =
          await fetch(
            "/aprender-asl/diccionario/api/themes"
          );

        const data = await response.json();

        setThemes(data.themes);

      } catch (error) {

        console.error("Theme load error:", error);

      }

    }

    loadThemes();

  }, []);

  /*
  SEARCH FUNCTION
  */
  async function performSearch(
    searchQuery,
    searchTheme,
    startCursor = null,
    append = false
  ) {

    setLoading(true);

    try {

      const params = new URLSearchParams();

      if (searchQuery)
        params.append("query", searchQuery);

      if (searchTheme)
        params.append("theme", searchTheme);

      if (startCursor)
        params.append("cursor", startCursor);

      params.append("page_size", PAGE_SIZE);

      const response =
        await fetch(
          `/aprender-asl/diccionario/api/search?${params}`
        );

      const data = await response.json();

      const items =
        data.results.map(row => ({

          id: row.id,

          word:
            row.properties.Word.title?.[0]?.plain_text || "",

          themes:
            row.properties.Themes.multi_select.map(
              t => t.name
            ),

          image:
            row.properties.Picture.files?.[0]?.file?.url ||
            row.properties.Picture.files?.[0]?.external?.url ||
            "",

          link:
            row.properties.YoutubeLink?.url || "",

          synonyms:
            row.properties.Synonyms.rich_text.map(
              t => t.plain_text
            ),

        }));

      if (append)
        setResults(prev => [...prev, ...items]);
      else
        setResults(items);

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
  INITIAL LOAD
  */
  useEffect(() => {

    performSearch("", "", null, false);

  }, []);

  /*
  SEARCH CHANGE
  */
  useEffect(() => {

    const timeout = setTimeout(() => {

      performSearch(query, theme, null, false);

    }, 300);

    return () => clearTimeout(timeout);

  }, [query, theme]);

  /*
  LOAD MORE
  */
  function loadMore() {

    performSearch(
      query,
      theme,
      cursor,
      true
    );

  }

  /*
  UI
  */
  return (

    <div>

      {/* SEARCH */}

      <div className={styles.searchContainer}>

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar palabra..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
        />

        <select
          className={styles.filterSelect}
          value={theme}
          onChange={(e) =>
            setTheme(e.target.value)
          }
        >

          <option value="">
            Todos los temas
          </option>

          {themes.map(t => (

            <option key={t} value={t}>
              {t}
            </option>

          ))}

        </select>

      </div>

      {/* RESULT COUNT */}

      {initialized && !loading && (

        <div className={styles.resultCount}>

          {results.length} palabra
          {results.length !== 1 && "s"}

        </div>

      )}

      {/* LOADING */}

      {loading && results.length === 0 && (

        <LoadingIndicator />

      )}

      {/* FLASHCARDS */}

      {!loading && results.length > 0 && (

        <FlashcardList
          flashcards={results}
        />

      )}

      {/* LOAD MORE BUTTON */}

      {!loading && hasMore && (

        <div className={styles.loadMoreContainer}>

          <button
            className={styles.loadMoreButton}
            onClick={loadMore}
          >

            Cargar más

          </button>

        </div>

      )}

      {/* NO RESULTS */}

      {initialized &&
        !loading &&
        results.length === 0 && (

          <div className={styles.resultCount}>

            No se encontraron resultados

          </div>

      )}

    </div>

  );

}