'use client'

import { ChevronRight, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "./ui/pagination";
import { useState } from "react";
import Link from "next/link";

interface PaginationComponentProps {
  skip: number,
  take: number,
  totalProduct: number,
}
export function PaginationComponent({ skip, take, totalProduct }:PaginationComponentProps) {
  const [pageIndex , setPageIndex] = useState(1)

  function resetPage() {
    setPageIndex(1)
    return 1
  }

  return (
    <Pagination className="mt-4 mb-40 justify-end">
    <PaginationContent>
      <PaginationItem>
        {skip > 10 ? (
          <PaginationPrevious 
            href={`/?skip=${skip <= 0 ? 0 :skip - 20}&take=${take - 20}`} 
            onClick={() =>setPageIndex(state => state - 1)}
          />

        ): (
          <></>
        )}
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="">{pageIndex < 1 ? resetPage() : pageIndex  }</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem className="flex justify-center items-center">
        {/* <Button variant={'ghost'}>Proximo <ChevronRight onClick={() => value = value + 20 } /></Button> */}
        <PaginationNext  
          href={`/?skip=${skip + 20}&take=${take + 20}`} 
          onClick={() =>setPageIndex(state => state + 1)} 
        />
        <Link
            className="ml-2"  
            href={`/?skip=${totalProduct - 20}&take=${totalProduct}`} 
            onClick={() =>setPageIndex(state => state + 1)} 
          >
            <ChevronsRight className="h-4 w-4"/>
          </Link>

      </PaginationItem>
    </PaginationContent>
  </Pagination>

  )
}