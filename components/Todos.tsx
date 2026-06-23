import { getDeletedTodos, getTodos, } from "@/lib/todos";
import { CreateTodoForm, EmptyDeletedTodsForm, } from "./TodoAction";
import { TodoList, DeletedTodoList } from "./TodoList";
import { Suspense } from "react";
import { TodosLoading } from "@/app/loading";

export default async function Todos() {
    const todos = await getTodos();
    const deletedTodos = await getDeletedTodos()

    return (
        <>
            <section className="flex w-full flex-1 justify-center">
                <article className="flex flex-col items-center w-full">
                    <header className="my-8">
                        <h1 className="text-6xl">TODOS</h1>
                    </header>
                    <main className="flex flex-col w-full max-w-3xl px-4 gap-8">
                        <article className="border">
                            <header className="flex justify-between border-b px-4 py-2 bg-muted/50">
                                <h1 className="text-xl">Todos</h1>
                                <div className="flex">
                                    <CreateTodoForm />
                                </div>
                            </header>
                            <main className="flex flex-col items-center gap-4 px-4 py-2">
                                <Suspense fallback={<TodosLoading />}>
                                    <TodoList todos={todos} />
                                </Suspense>
                            </main>
                        </article>
                        <article className="border">
                            <header className="flex justify-center border-b px-4 py-2 bg-muted/50">
                                <h1 className="text-xl">Trash</h1>
                                <div className="flex w-full justify-end">
                                    <EmptyDeletedTodsForm count={deletedTodos.length} />
                                </div>
                            </header>
                            <main className="flex flex-col items-center gap-4 px-4 py-2">
                                <Suspense fallback={<TodosLoading />}>
                                    <DeletedTodoList todos={deletedTodos} />
                                </Suspense>
                            </main>
                        </article>
                    </main>
                </article>
            </section>
        </>
    );
}