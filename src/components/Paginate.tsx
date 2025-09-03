"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

type PaginateProps = {
  countPages: number;
};

export default function Paginate({ countPages }: PaginateProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (event: { selected: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (event.selected + 1).toString());

    router.push(`/characters?${params.toString()}`);
  };

  return (
    <>
      <div className="sm:hidden flex justify-center">
        <ReactPaginate
          pageCount={countPages}
          marginPagesDisplayed={0}
          pageRangeDisplayed={0}
          previousLabel="<"
          nextLabel=">"
          containerClassName="flex gap-4"
          previousLinkClassName="px-3 py-2 bg-gray-800 text-white rounded"
          nextLinkClassName="px-3 py-2 bg-gray-800 text-white rounded"
          disabledClassName="opacity-50 pointer-events-none"
        />
      </div>
      <div className="hidden sm:flex justify-center items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          previousLabel="< previous"
          onPageChange={handlePageClick}
          pageCount={countPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          containerClassName="flex justify-center gap-2 items-center text-xs"
          pageLinkClassName="px-3 py-2 border border-gray-800 rounded-lg text-gray-800 cursor-pointer min-w-10"
          activeClassName="bg-gray-800 text-white"
          activeLinkClassName="bg-gray-800 text-white pointer-events-none"
          previousLinkClassName="px-3 py-2 bg-gray-800 text-white rounded-lg cursor-pointer min-w-12"
          nextLinkClassName="px-3 py-2 bg-gray-800 text-white rounded-lg cursor-pointer min-w-12"
          disabledClassName="opacity-50 pointer-events-none"
        />
      </div>
    </>
  );
}
