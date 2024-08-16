// export default async function fetchData(letter, cursor = null) {
//     let url;
  
//     url = letter ? `/ASL/Diccionario/DictLetter/api/fetchLetter?filter=${letter}` : '/ASL/Diccionario/DictLetter/api/fetchLetter';
//     url = cursor ? `/ASL/Diccionario/DictLetter/api/fetchLetter?next_cursor=${cursor}&filter=${letter}` : url;
  
//     // console.log(url)
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

export default async function fetchData(letter, cursor = null) {
  const headers = new Headers();
  if (letter) headers.set('x-filter', letter);
  if (cursor) headers.set('x-next-cursor', cursor);

  try {
    const response = await fetch('/ASL/Diccionario/DictLetter/api/fetchLetter', { headers });
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