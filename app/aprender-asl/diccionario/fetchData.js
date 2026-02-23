export default async function fetchData() {

  try {

    const response = await fetch('/ASL/DiccionarioV2/api/dictGet');

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();

    return data.results || [];

  } catch (error) {

    console.error("Fetch error:", error);

    return [];

  }

}