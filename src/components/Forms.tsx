"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { FormsProps } from "@/types/types";

// type FormsProps = {
//   status: string;
//   gender: string;
//   name: string;
// };

export default function Forms({ status, gender, name }: FormsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(name);
  const debouncedSearch = useDebounce(search, 500);

  const [sex, setSex] = useState(gender);
  const [statusState, setStatusState] = useState(status);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearch.trim()) {
      params.set("name", debouncedSearch.trim());
    } else {
      params.delete("name");
    }

    if (sex) {
      params.set("gender", sex);
    } else {
      params.delete("gender");
    }

    if (statusState) {
      params.set("status", statusState);
    } else {
      params.delete("status");
    }

    if (debouncedSearch !== name || sex !== gender || statusState !== status) {
      params.set("page", "1");
    }

    router.push(`/characters?${params.toString()}`);
  }, [
    debouncedSearch,
    gender,
    name,
    router,
    searchParams,
    sex,
    status,
    statusState,
  ]);

  const handleReset = () => {
    setSearch("");
    setSex("");
    setStatusState("");

    router.push(`/characters`);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <form className="flex flex-col sm:flex-row flex-wrap gap-4 w-full md:w-auto">
          <input
            type="text"
            name="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isFocused ? "" : "Search by name"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="px-3 py-2 rounded border border-gray-700 text-white bg-gray-900 text-center"
          />

          <select
            name="gender"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="px-1 py-2 rounded border border-gray-700 text-white bg-gray-900 text-center"
          >
            <option value="">All Genders</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>

          <select
            name="status"
            value={statusState}
            onChange={(e) => setStatusState(e.target.value)}
            className="px-1 py-2 rounded border border-gray-700 text-white bg-gray-900 text-center"
          >
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </form>

        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 bg-red-900 text-white rounded hover:bg-gray-600 transition cursor-pointer"
        >
          Reset all filters
        </button>
      </div>
    </div>
  );
}
