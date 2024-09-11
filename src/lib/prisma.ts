import { PrismaClient } from "@prisma/client";
import { Pool } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'

declare global {
  var prisma: PrismaClient | undefined;
}


const prisma = new PrismaClient()

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;