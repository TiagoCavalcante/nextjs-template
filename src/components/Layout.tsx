import Link from "next/link"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}
