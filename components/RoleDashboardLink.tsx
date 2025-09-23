"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
  className?: string
  children?: React.ReactNode
}

export default function RoleDashboardLink({ className, children }: Props) {
  const [href, setHref] = useState<string>("/auth/login")

  useEffect(() => {
    try {
      const role = typeof window !== "undefined" ? localStorage.getItem("role") : null
      if (role === "admin") setHref("/admin")
      else if (role === "faculty") setHref("/faculty")
      else if (role === "student") setHref("/student")
      else setHref("/auth/login")
    } catch {
      setHref("/auth/login")
    }
  }, [])

  return (
    <Link href={href} className={className}>
      {children ?? "Dashboard"}
    </Link>
  )
}


