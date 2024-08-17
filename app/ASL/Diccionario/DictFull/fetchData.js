// export default async function fetchData(nextCursor) {
//     const url = nextCursor ? `/ASL/Diccionario/DictFull/api/dictGet?next_cursor=${nextCursor}` : '/ASL/Diccionario/DictFull/api/dictGet';
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

export default async function fetchData(cursor = null) {
  const headers = new Headers();
  if (cursor) headers.set('x-next-cursor', cursor);

  try {
    const response = await fetch('/ASL/Diccionario/DictFull/api/dictGet', { headers });
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
