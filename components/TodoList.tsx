import { DeleteTodoActionButton, RestoreTodoActionButton, ToggleTodoActionButton } from "./TodoAction";
import { deleteAnywayTodo, deleteTodo, restoreTodo, toggleTodo } from "@/lib/todos";
import { TodoModel } from "@/app/generated/prisma/models";

export function TodoList({ todos }: { todos: TodoModel[] }) {
    return (
        <>
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
                            <form action={toggleTodo.bind(null, todo.id)}>
                                <ToggleTodoActionButton todo={todo} />
                            </form>
                            <form action={deleteTodo.bind(null, todo.id)}>
                                <DeleteTodoActionButton />
                            </form>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export function DeletedTodoList({ todos }: { todos: TodoModel[] }) {
    return (
        <>
            <ul className="flex w-full flex-col items-center gap-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex w-full items-center justify-between"
                    >
                        <span className={todo.completed ? "line-through" : ""}>
                            {todo.text}
                        </span>
                        <div className="flex gap-2">
                            <form action={restoreTodo.bind(null, todo.id)}>
                                <RestoreTodoActionButton />
                            </form>
                            <form action={deleteAnywayTodo.bind(null, todo.id)}>
                                <DeleteTodoActionButton />
                            </form>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}