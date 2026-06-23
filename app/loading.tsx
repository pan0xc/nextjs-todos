import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <LoaderIcon
            role="status"
            aria-label="Loading"
            className={cn("size-4 animate-spin", className)}
            {...props}
        />
    )
}

export { Spinner }

export default function Loading() {
    return (
        <>
            <main className="text-center flex flex-1 flex-col min-h-0 justify-center items-center">
                <section className="-translate-y-24">
                    <Spinner className="size-16" />
                </section>
            </main>
        </>
    )
}

export function TodosLoading() {
    return (
        <>
            <section className="text-center flex items-center min-h-10">
                <Spinner className="size-8" />
            </section>
        </>
    )
}