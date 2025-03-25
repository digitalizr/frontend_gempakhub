import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to GempakHub Platform</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        This is a placeholder for your existing platform home page. You would redirect users here after successful sign
        in.
      </p>
      <Link href="/">
        <Button>Back to Landing Page</Button>
      </Link>
    </div>
  )
}

