
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
import { SearchProduct } from "@/components/searchProduct";
import { Phone } from 'lucide-react'

export default async function Home() {

  const products = await prisma.product.findMany({
    orderBy: {
      name: 'asc'
    },
  })

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
          <a target="_blank" href="https://wa.me/1533941890" className="px-4 py-3 bg-zinc-100 flex gap-1 rounded hover:bg-zinc-200 transition-colors"> <Phone className="text-green-500" /> WhatsApp</a>
        </div>
      </div>
      <div className="flex max-w-screen-md m-auto flex-col items-center mt-10">
        <h1 className="text-4xl font-black ">Encontre nossos preços.</h1>
        <p className="text-xl text-zinc-700 m-2">Encontre as melhores opções com o custo-benefício que você procura.</p>
        <span className="text-sm text-zinc-500">Os preços não podem estar corretos essa é so uma base para pesquisa do <strong>Deposito Camargo</strong></span>


         <SearchProduct/>

      </div>

      <div className="mt-16 max-w-3xl m-auto">
        <Table>
          <TableCaption>lista de produtos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">cod produto</TableHead>
              <TableHead className="w-full">nome</TableHead>
              <TableHead className="w-16 max-md:sr-only  md:table-cell">Unidade</TableHead>
              <TableHead className="w-[200px]">preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell className="text-xs md:text-base">{product.codProduct}</TableCell>
                <TableCell className="w-full text-xs md:text-base">{product.name}</TableCell>
                <TableCell className="w-16 max-md:sr-only  md:table-cell">{product.unit}</TableCell>
                <TableCell className="font-bold">{formattedPriceInCents(product.priceInCents)}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>

    </div>
  );
}
