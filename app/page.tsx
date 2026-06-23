import Todos from "../components/Todos";

export default async function Page() {

  return (
    <>
      <main className="flex flex-1 flex-col min-h-0 items-center">
        <Todos />
      </main>
    </>
  )
}