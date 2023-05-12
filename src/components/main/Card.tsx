import React from "react"

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="p-4 border border-neutral-800
    min-w-[100px] min-h-[100px] bg-neutral-950 rounded-lg hover:-translate-y-4
    transition-all
  "
    >
      {children}
    </div>
  )
}
