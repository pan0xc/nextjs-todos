"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export async function getTodos() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return prisma.todo.findMany({
        where: {
            deleteAt: null
        },
    })
}

export async function getDeletedTodos() {
    return prisma.todo.findMany({
        where: {
            deleteAt: {
                not: null
            }
        },
    })
}

export async function getTodo(id: number) {
    return prisma.todo.findMany({
        where: {
            id,
            deleteAt: null
        },
    })
}

export async function createTodo(formData: FormData) {
    const text = formData.get("text")?.toString().trim();

    if (!text) {
        return;
    }

    await prisma.todo.create({
        data: { text }
    })

    revalidatePath("/");
}

export async function updateTodo(
    id: number,
    data: {
        text?: string;
        completed?: boolean;
    }
) {
    return prisma.todo.update({
        where: { id },
        data,
    });
}

export async function toggleTodo(id: number) {
    const todo = await prisma.todo.findUnique({
        where: { id },
    });

    if (!todo) {
        throw new Error("Todo not found");
    }

    await prisma.todo.update({
        where: { id },
        data: {
            completed: !todo.completed,
        },
    });

    revalidatePath("/");
}

export async function deleteTodo(id: number) {
    await prisma.todo.update({
        where: { id },
        data: {
            deleteAt: new Date()
        }
    });

    revalidatePath("/");
}

export async function deleteAnywayTodo(id: number) {
    await prisma.todo.delete({
        where: { id },
    });

    revalidatePath("/");
}

export async function emptydeletedTodos() {
    await prisma.todo.deleteMany({
        where: {
            deleteAt: {
                not: null
            }
        },
    });

    revalidatePath("/");
}

export async function restoreTodo(id: number) {
    await prisma.todo.update({
        where: { id },
        data: {
            deleteAt: null
        }
    });

    revalidatePath("/");
}