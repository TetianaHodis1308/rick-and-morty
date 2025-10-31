const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://rickandmortyapi.com/api/";

export async function apiFetch(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const res = await fetch(url, { ...options, headers, cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    console.error("API error:", res.status, text);
    throw new Error(`Помилка API: ${res.status}`);
  }

  return res.json();
}
