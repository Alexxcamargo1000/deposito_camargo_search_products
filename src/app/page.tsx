
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import {  Plus } from "lucide-react";
import { SearchProduct } from "@/components/searchProduct";

export default async function Home({
  searchParams
}: {
  searchParams: { skip: string, take: string }
}) {

  const countProducts = await prisma.product.count()
  const products = await prisma.product.findMany({
    // skip: Number(searchParams.skip) || 0,
    // take: Number(searchParams.take) || 20,
    orderBy: {
      name: 'asc'
    },
  })


  console.log(searchParams);
  

  function formattedPriceInCents(priceInCents: number) {
    return (priceInCents / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div className="px-4 max-w-7xl m-auto">

      <div className="py-8 flex items-center justify-between">
        <Image src={'/logoDeposito.png'} alt="" width={200} height={100} quality={100} />

        <div className="flex gap-4">
          <a href="" className="px-4 py-3 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors">Home</a>
          <a href="" className="px-4 py-3 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors">Produtos</a>
        </div>
      </div>

      <div className="flex max-w-screen-md m-auto flex-col items-center mt-10">
        <h1 className="text-4xl font-black ">Encontre nossos preços.</h1>
        <p className="text-xl text-zinc-700 m-2">Encontre as melhores opções com o custo-benefício que você procura.</p>
        <span className="text-sm text-zinc-500">Os preços não podem estar corretos essa é so uma base para pesquisa do <strong>Deposito Camargo</strong></span>

        <div className="mt-16 w-6/12 flex ">
         <SearchProduct products={products} />
        </div>
      </div>

      <div className="mt-16 max-w-3xl m-auto">
        <Table>
          <TableCaption>lista de produtos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">cod produto</TableHead>
              <TableHead className="w-full">nome</TableHead>
              <TableHead className="w-[200px]">preço</TableHead>
              {/* <TableHead className="w-[100px]"></TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>

            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.codProduct}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className="font-bold">{formattedPriceInCents(product.priceInCents)}</TableCell>
                {/* <TableCell><Button variant={'outline'}><Plus /></Button></TableCell> */}
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>

    </div>
  );
}
