import { Suspense } from "react";
import Todos from "../components/Todos";
import Loading from "./loading";

export default async function Page() {

  return (
    <>
      <main className="flex flex-col items-center">
        <Suspense fallback={<Loading />}>
          <Todos />
        </Suspense>
      </main>
    </>
  )
}