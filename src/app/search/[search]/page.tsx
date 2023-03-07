import { Results } from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${params.search}&language=en-US&include_adult=false`
  );

  console.log(params);

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  // use await so we get a type response and not promise
  const data = await res.json();

  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="pt-6 text-center">No results</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
