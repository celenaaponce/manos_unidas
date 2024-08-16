export default async function fetchData(nextCursor) {
    const url = nextCursor ? `/ASL/Diccionario/DictFull/api/dictGet?next_cursor=${nextCursor}` : '/ASL/Diccionario/DictFull/api/dictGet';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }