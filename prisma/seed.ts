import { TodoCreateInput } from "@/app/generated/prisma/models";
import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { faker } from "@faker-js/faker"
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});

function generateMockTodos(): TodoCreateInput {
    return {
        text: faker.book.title(),
        completed: faker.datatype.boolean()
    }
}

const todoData: Prisma.TodoCreateInput[] = [
    generateMockTodos(),
    generateMockTodos(),
    generateMockTodos()
]

export async function main() {
    for (const t of todoData) {
        await prisma.todo.create({ data: t });
    }
}

main();