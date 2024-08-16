export default async function fetchData(theme, cursor = null) {
  const headers = new Headers();
  if (theme) headers.set('x-filter', theme);
  if (cursor) headers.set('x-next-cursor', cursor);

  try {
    const response = await fetch('/ASL/Diccionario/DictTheme/api/fetchTheme', { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

