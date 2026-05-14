import { PrismaClient } from "@prisma/client";
import { cacheLife, cacheTag } from "next/cache";

async function getOperative() {
  'use cache';
  cacheLife({ revalidate: 3600 });
  cacheTag('council-roster');

  const prisma = new PrismaClient();
  return await prisma.operative.findMany();
}

export default async function TerminalPage() {
  const operatives = await getOperative();
  
  return (
    <main className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {operatives.map((operative) => (
          <div key={operative.id} className="border border-[#262626] p-4 hover:border-white/20">
            <h2 className="text-xl font-bold">[{operative.rank}] {operative.codename}</h2>
            <p className="text-sm opacity-50">{operative.specialty}</p>
          </div>
        ))}
      </div>
    </main>
  )
}