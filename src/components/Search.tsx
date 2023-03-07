"use client";
import React, { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-auto flex max-w-6xl items-center justify-between px-5 "
    >
      <input
        type="text"
        placeholder="Search keyword..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-500 outline-none"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-500 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
