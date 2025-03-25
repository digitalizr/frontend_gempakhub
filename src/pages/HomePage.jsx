import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-gempak-black">Welcome to GempakHub Platform</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        This is a placeholder for your existing platform home page. You would redirect users here after successful sign
        in.
      </p>
      <Link to="/">
        <button className="px-4 py-2 rounded-md bg-gempak-yellow text-gempak-black font-medium hover:bg-gempak-yellow/90 shadow-sm">
          Back to Landing Page
        </button>
      </Link>
    </div>
  )
}

export default HomePage

