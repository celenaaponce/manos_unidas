export default async function fetchSearch(query, theme) {

  const params = new URLSearchParams();

  if (query) params.append("query", query);
  if (theme) params.append("theme", theme);

  const response = await fetch(
    `/ASL/DiccionarioV2/api/search?${params}`
  );

  const data = await response.json();

  return data.results || [];

}