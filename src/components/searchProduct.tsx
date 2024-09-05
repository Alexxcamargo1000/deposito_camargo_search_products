import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Product } from "@prisma/client";

export interface searchProductProps {
  products: Product[]
}

export function SearchProduct({
  products
}: searchProductProps) {
  return (
    <>
      <Input className="rounded-none rounded-l" />
      <Button className="rounded-none rounded-r"><Search /></Button>
    </>
  )
}