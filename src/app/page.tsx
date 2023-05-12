"use client"
import Card from "@/components/main/Card"
import { useEffect, useState } from "react"
import axios from "axios"
export default function Home() {
  const [response, setResponse] = useState<{ msg: string; status: number }>()

  useEffect(() => {
    ;(async function () {
      try {
        const response = await axios.get<{ msg: string; status: number }>(
          "https://gin-main-swbyfznsjq-de.a.run.app/test"
        )
        setResponse(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
      <h1 className="text-3xl tracking-widest text-neutral-200 font-bold">
        POPPER
      </h1>
      <Card>
        <article className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-neutral-200 text-">
            Testing NEXT.JS 13
          </h2>
          <p className="font-light text-neutral-300 tex-xs indent-4">
            Veniam tempor elit consequat in est cillum aliqua sunt nisi enim
            amet veniam. Amet enim nisi laborum nulla culpa commodo. Laborum
            excepteur cupidatat sunt ipsum laboris elit est laboris ullamco.
            Proident ullamco in ad minim anim. Dolore id labore consequat
            consequat. Tempor sint fugiat adipisicing dolor.
          </p>
          <code>{response?.msg} | {response?.status}</code>
        </article>
      </Card>
    </main>
  )
}
