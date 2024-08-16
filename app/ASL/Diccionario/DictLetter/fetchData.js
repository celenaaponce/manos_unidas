export default async function fetchData(letter, cursor = null) {
    let url;
  
    url = letter ? `/ASL/Diccionario/DictLetter/api/fetchLetter?filter=${letter}` : '/ASL/Diccionario/DictLetter/api/fetchLetter';
    url = cursor ? `/ASL/Diccionario/DictLetter/api/fetchLetter?next_cursor=${cursor}&filter=${letter}` : url;
  
    // console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }