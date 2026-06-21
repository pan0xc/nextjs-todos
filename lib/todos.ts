"use server";

import { prisma } from "./prisma";

export async function getTodos() {
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

export async function createTodo(text: string) {
    return prisma.todo.create({
        data: { text }
    })
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

    return prisma.todo.update({
        where: { id },
        data: {
            completed: !todo.completed,
        },
    });
}

export async function deleteTodo(id: number) {
    return prisma.todo.update({
        where: { id },
        data: {
            deleteAt: new Date()
        }
    });
}

export async function deleteAnywayTodo(id: number) {
    return prisma.todo.delete({
        where: { id },
    });
}

export async function emptydeletedTodos() {
    return prisma.todo.deleteMany({
        where: {
            deleteAt: {
                not: null
            }
        },
    });
}

export async function restoreTodo(id: number) {
    return prisma.todo.update({
        where: { id },
        data: {
            deleteAt: null
        }
    });
}