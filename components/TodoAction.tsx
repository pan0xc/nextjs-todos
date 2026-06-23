"use client";

import { TodoModel } from "@/app/generated/prisma/models";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";
import { createTodo, emptydeletedTodos } from "@/lib/todos";

export function ToggleTodoActionButton({ todo }: { todo: TodoModel }) {
    const { pending } = useFormStatus();

    return (
        <>
            <Button
                type="submit"
                disabled={pending}
                variant={"outline"}
            >
                {pending && <Spinner data-icon="inline-start" />}
                {(todo.completed ? "Undo" : "Done")}
            </Button>
        </>
    )
}

export function DeleteTodoActionButton() {
    const { pending } = useFormStatus();

    return (
        <>
            <Button
                type="submit"
                disabled={pending}
                variant={"destructive"}
            >
                {pending && <Spinner data-icon="inline-start" />}
                Delete
            </Button>
        </>
    )
}

export function EmptyTodoActionButton({ count }: { count: number }) {
    const { pending } = useFormStatus();

    return (
        <>
            <Button
                type="submit"
                disabled={pending || count === 0}
                variant={"destructive"}
            >
                {pending && <Spinner data-icon="inline-start" />}
                Empty
            </Button>
        </>
    )
}

export function CreateTodoButton() {
    const { pending } = useFormStatus();

    return (
        <>
            <Button
                type="submit"
                disabled={pending}
            >
                {pending && <Spinner data-icon="inline-start" />}
                New
            </Button>
        </>
    )
}

export function CreateTodoForm() {

    return (
        <>
            <form
                action={createTodo}
                className="flex justify-center gap-2"
            >
                <Input
                    type="text"
                    name="text"
                    placeholder="Please Input Todo"
                />
                <CreateTodoButton />
            </form>
        </>
    )
}

export function EmptyDeletedTodsForm({ count }: { count: number }) {
    return (
        <>
            <form action={emptydeletedTodos.bind(null)}>
                <EmptyTodoActionButton count={count} />
            </form>
        </>
    )
}

export function RestoreTodoActionButton() {
    const { pending } = useFormStatus();

    return (
        <>
            <Button
                type="submit"
                disabled={pending}
            >
                {pending && <Spinner data-icon="inline-start" />}
                Restore
            </Button>
        </>
    )
}