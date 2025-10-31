"use client";

import { PaginateProps } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

// type PaginateProps = {
//   countPages: number;
// };

export default function Paginate({ countPages }: PaginateProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPageParam = searchParams.get("page");
  const currentPage = currentPageParam ? parseInt(currentPageParam, 10) - 1 : 0;

  const handlePageClick = (event: { selected: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (event.selected + 1).toString());

    router.push(`/characters?${params.toString()}`);
  };

  const renderPaginate = (isMobile: boolean) => (
    <ReactPaginate
      forcePage={currentPage}
      onPageChange={handlePageClick}
      pageCount={countPages}
      breakLabel={isMobile ? null : "..."}
      nextLabel={isMobile ? ">" : "next >"}
      previousLabel={isMobile ? "<" : "< previous"}
      marginPagesDisplayed={0}
      pageRangeDisplayed={isMobile ? 0 : 3}
      containerClassName="flex justify-center gap-2 items-center text-xs"
      pageLinkClassName="px-3 py-2 border border-gray-800 rounded-lg text-gray-800 cursor-pointer min-w-10"
      activeClassName="bg-gray-800 text-white"
      activeLinkClassName="bg-gray-800 text-white pointer-events-none"
      previousLinkClassName="px-3 py-2 bg-gray-800 text-white rounded-lg cursor-pointer min-w-12"
      nextLinkClassName="px-3 py-2 bg-gray-800 text-white rounded-lg cursor-pointer min-w-12"
      disabledClassName="opacity-50 pointer-events-none"
    />
  );

  return (
    <>
      <div className="sm:hidden flex justify-center">
        {renderPaginate(true)}
      </div>
      <div className="hidden sm:flex justify-center items-center">
        {renderPaginate(false)}
      </div>
    </>
  );
}
