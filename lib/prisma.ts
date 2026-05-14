// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Debug: This will show up in your terminal, not the browser console.
console.log("--- SYSTEM CHECK: DATABASE_URL is", process.env.DATABASE_URL ? "DETECTED" : "NULL ---");

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL, // Correct property for modern Prisma
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;