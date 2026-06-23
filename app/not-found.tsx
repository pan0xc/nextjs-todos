import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <main className="text-center flex min-h-dvh justify-center items-center">
                <section className="-translate-y-24">
                    <h1 className="text-8xl">404</h1>
                    <p className="text-xl">Page Not Found</p>
                    <Link
                        href="/"
                        className={buttonVariants({ variant: "link" })}
                    >
                        Go back home
                    </Link>
                </section>
            </main>
        </>
    )
}