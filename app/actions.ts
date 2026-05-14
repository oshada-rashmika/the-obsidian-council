'use server';

import { PrismaClient } from "@prisma/client";
import { revalidateTag } from "next/cache";

const prisma = new PrismaClient();

export async function addOperative(formdata: FormData) {
    const codename = formdata.get("codename") as string;

    await prisma.operative.create({
        data: {
            codename,
            rank: "B",
            status: "ACTIVE",
            specialty: "INFILTRATION"
        }
    });
    
    revalidateTag('council-roster', 'max');
}