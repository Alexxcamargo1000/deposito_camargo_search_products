import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Link from "next/link";
export default async function Search({ params }: { params: { search: string } }) {
  const search = decodeURIComponent(params.search)
  const products = await prisma.product.findMany({
    orderBy: {
      name: 'asc'
    },
    where: {
      name: {
        contains: search.toUpperCase()
      }
    }
  })

  console.log(products);
  

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

        {/* <div className="flex gap-4">
          <a href="" className="px-4 py-3 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors"></a>
          <a href="" className="px-4 py-3 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors"></a>
        </div> */}
      </div>

      

      <div className="mt-16 mb-8  m-auto flex items-center justify-between max-w-3xl">
        <span className="text-2xl font-semibold">Busca produtos: {search}</span>
        <Link href={'/'} className="px-2 py-1 bg-muted-foreground text-muted rounded">voltar</Link>
      </div>

      <div className=" max-w-3xl m-auto"> 
        <Table>
          <TableCaption>lista de produtos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">cod produto</TableHead>
              <TableHead className="w-full">nome</TableHead>
              <TableHead className="w-[200px]">preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.codProduct}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className="font-bold">{formattedPriceInCents(product.priceInCents)}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </div>

    </div>
  )
}