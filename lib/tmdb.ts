const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const fetchUrl = async (endpoint: string) => {
  const res = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data from TMDB");
  }
  return res.json();
};
