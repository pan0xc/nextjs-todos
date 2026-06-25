import { NewsList } from "@/components/NewsList";
import Todos from "../components/Todos";
import { Suspense } from "react";
import { NewsLoading } from "./loading";

export default async function Page() {

  return (
    <>
      <main className="flex flex-1 flex-col min-h-0 items-center">
        <Todos />

        <Suspense fallback={<NewsLoading />}>
          <NewsList />
        </Suspense>
      </main>
    </>
  )
}
