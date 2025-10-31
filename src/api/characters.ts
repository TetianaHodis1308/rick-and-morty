export async function fetchCharacters(params: Record<string, string> = {}) {
  const query = new URLSearchParams(params);
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?${query.toString()}`
  );
  const data = await res.json();
  return data;
}
