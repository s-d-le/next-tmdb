"use client";
import { useEffect } from "react";

type IError = {
  error: string;
  reset: any;
};

export default function Error({ error, reset }: IError) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="mt-10 text-center ">
      <h1>Something went wrong</h1>
      <button
        className="underline hover:text-amber-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
