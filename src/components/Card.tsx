import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IMovieResult } from "./Results";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({
  id,
  title,
  backdrop_path,
  poster_path,
  overview,
  name,
  release_date,
  first_air_date,
  vote_count,
}: IMovieResult) {
  return (
    <div className="group cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:p-3 sm:shadow-md sm:hover:shadow-slate-400">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          alt={`Poster for ${title} is not available`}
          className="transition-opacity duration-200 group-hover:opacity-80 sm:rounded-t-lg"
          placeholder="blur"
          blurDataURL="/loading.svg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="p-2">
          <p className="text-md truncate">{overview}</p>
          <h2 className="truncate text-lg font-bold">{title || name}</h2>
          <p className="flex items-center">
            {release_date || first_air_date}
            <FiThumbsUp className="mr-1 ml-3 h-5" />
            {vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
