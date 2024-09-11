import { PrismaClient } from "@prisma/client";
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

declare global {
  var prisma: PrismaClient | undefined;
}


const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
const prisma = new PrismaClient({ adapter })

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;