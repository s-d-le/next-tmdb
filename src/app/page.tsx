const API_KEY = process.env.TMDB_API_KEY;

import { Results } from "@/components/Results";

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 86400 } } //update cache after one day
  );

  const data = await res.json();
  const results = data.results;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
