import { FC } from "react";
import Card from "./Card";

export interface IMovieResult {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
}

export interface IMovieResults {
  results: IMovieResult[];
}

export const Results: FC<IMovieResults> = ({ results }) => {
  return (
    <div className="mx-auto max-w-6xl py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <Card key={result.id} {...result} />
      ))}
    </div>
  );
};
