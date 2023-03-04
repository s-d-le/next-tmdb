import { FC } from "react";

export interface IMovieResult {
  id: number;
  title: string;
}

export interface IMovieResults {
  results: IMovieResult[];
}

export const Results: FC<IMovieResults> = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
};
