import { createTodo, deleteAnywayTodo, deleteTodo, emptydeletedTodos, getDeletedTodos, getTodos, restoreTodo, toggleTodo } from "@/lib/todos";
import { CreateTodoActionButton, DeleteTodoActionButton, EmptyTodoActionButton, RestoreTodoActionButton, ToggleTodoActionButton } from "./TodoactionButton";
import { revalidatePath } from "next/cache";

async function toggleTodoAction(id: number) {
    "use server";

    await toggleTodo(id);

    revalidatePath("/");
}

async function createTodoAction(formData: FormData) {
    "use server";

    const text = formData.get("text")?.toString().trim();

    if (!text) {
        return;
    }

    await createTodo(text);

    revalidatePath("/");
}

async function deleteTodoAction(id: number) {
    "use server";

    await deleteTodo(id);

    revalidatePath("/");
}

async function deleteAnywayTodoAction(id: number) {
    "use server";

    await deleteAnywayTodo(id);

    revalidatePath("/");
}

async function emptyTodosAction() {
    "use server";

    await emptydeletedTodos();

    revalidatePath("/");
}

async function restoreTodoAction(id: number) {
    "use server";

    await restoreTodo(id);

    revalidatePath("/");
}

export default async function Todos() {
    const todos = await getTodos();
    const deletedTodos = await getDeletedTodos()

    return (
        <>
            <section className="flex w-full justify-center">
                <article className="flex flex-col items-center w-full">
                    <h1 className="text-6xl my-8">TODOS</h1>
                    <div className="flex flex-col w-full max-w-3xl px-4 gap-8">
                        <article className="border">
                            <header className="flex justify-between border-b p-4">
                                <h1 className="text-2xl">Todos</h1>
                                <div className="flex">
                                    <form
                                        action={createTodoAction}
                                        className="flex justify-center gap-2"
                                    >
                                        <CreateTodoActionButton />
                                    </form>
                                </div>
                            </header>
                            <main className="flex flex-col items-center gap-4 p-4">
                                <ul className="flex flex-col w-full items-center gap-4">
                                    {todos.map((todo) => (
                                        <li
                                            key={todo.id}
                                            className="flex w-full max-w-3xl items-center justify-between"
                                        >
                                            <span className={todo.completed ? "line-through" : ""}>
                                                {todo.text}
                                            </span>
                                            <div className="flex gap-2">
                                                <form action={toggleTodoAction.bind(null, todo.id)}>
                                                    <ToggleTodoActionButton todo={todo} />
                                                </form>
                                                <form action={deleteTodoAction.bind(null, todo.id)}>
                                                    <DeleteTodoActionButton />
                                                </form>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </main>
                        </article>
                        <article className="border">
                            <header className="flex justify-center border-b p-4">
                                <h1 className="text-2xl">Trash</h1>
                                <div className="flex w-full justify-end">
                                    <form action={emptyTodosAction.bind(null)}>
                                        <EmptyTodoActionButton count={deletedTodos.length} />
                                    </form>
                                </div>
                            </header>
                            <main className="flex flex-col items-center gap-4 p-4">
                                <ul className="flex w-full flex-col items-center gap-4">
                                    {deletedTodos.map((todo) => (
                                        <li
                                            key={todo.id}
                                            className="flex w-full items-center justify-between"
                                        >
                                            <span className={todo.completed ? "line-through" : ""}>
                                                {todo.text}
                                            </span>
                                            <div className="flex gap-2">
                                                <form action={restoreTodoAction.bind(null, todo.id)}>
                                                    <RestoreTodoActionButton />
                                                </form>
                                                <form action={deleteAnywayTodoAction.bind(null, todo.id)}>
                                                    <DeleteTodoActionButton />
                                                </form>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </main>
                        </article>
                    </div>
                </article>
            </section>
        </>
    );
}