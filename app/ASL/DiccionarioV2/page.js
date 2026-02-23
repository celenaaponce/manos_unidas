"use client";

import styles from "./page.module.css";
import FlashcardList from "components/flashcards/flashcardList";
import LoadingIndicator from "components/loadingInfo/LoadingIndicator";
import { useEffect, useState } from "react";

export default function DiccionarioV2Page() {

  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("");
  const [results, setResults] = useState([]);
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Load themes once
  useEffect(() => {

    async function loadThemes() {

      try {

        const response = await fetch(
          "/ASL/DiccionarioV2/api/search?query=a"
        );

        const data = await response.json();

        const themeSet = new Set();

        data.results.forEach(row => {
          row.properties.Themes.multi_select.forEach(t => {
            themeSet.add(t.name);
          });
        });

        setThemes([...themeSet].sort());

      } catch (error) {

        console.error("Theme load error:", error);

      }

    }

    loadThemes();

  }, []);

  // Search function
  async function performSearch(searchQuery, searchTheme) {

    setLoading(true);

    try {

      const params = new URLSearchParams();

      if (searchQuery)
        params.append("query", searchQuery);

      if (searchTheme)
        params.append("theme", searchTheme);

      const response = await fetch(
        `/ASL/DiccionarioV2/api/search?${params}`
      );

      const data = await response.json();

      const items = data.results.map(row => ({

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

      setResults(items);

    } catch (error) {

      console.error("Search error:", error);
      setResults([]);

    }

    setLoading(false);
    setInitialized(true);

  }

  // Initial load
  useEffect(() => {

    performSearch("", "");

  }, []);

  // Debounced search
  useEffect(() => {

    const timeout = setTimeout(() => {

      performSearch(query, theme);

    }, 300);

    return () => clearTimeout(timeout);

  }, [query, theme]);

  return (

    <div>

      {/* SEARCH UI */}

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

      {/* RESULTS COUNT */}

      {initialized && !loading && (

        <div className={styles.resultCount}>

          {results.length} palabra
          {results.length !== 1 && "s"}

        </div>

      )}

      {/* LOADING */}

      {loading && <LoadingIndicator />}

      {/* FLASHCARDS */}

      {!loading && results.length > 0 && (

        <FlashcardList flashcards={results} />

      )}

      {/* NO RESULTS */}

      {initialized && !loading && results.length === 0 && (

        <div className={styles.resultCount}>

          No se encontraron resultados

        </div>

      )}

    </div>

  );

}