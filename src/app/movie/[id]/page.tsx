import Image from "next/image";
import React from "react";

async function getMovie(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({ params }: any) {
  //Nextjs page can take params that contain the path
  const movie = await getMovie(params.id);

  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col content-center items-center p-4 md:flex-row md:space-x-6 md:pt-8">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt={`Poster for ${movie.title} is not available`}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/loading.svg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 text-lg">
            <span className="mr-1">Overview: {movie.overview}</span>
          </p>
          <p className="mb-3">
            <span className="mr-1 text-sm">
              Date released: {movie.release_date || movie.first_air_date}
            </span>
          </p>
          <p className="mb-3">
            <span className="mr-1 text-sm">Rating: {movie.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
