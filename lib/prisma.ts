import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

if (!process.env.DATABASE_URL) {
  console.error("CRITICAL: DATABASE_URL is missing from process.env");
}

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;