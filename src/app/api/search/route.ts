import prisma from '@/lib/prisma'

export async function GET(request: Request) {

  const product = await prisma.product
}