"use client"

import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-blue text-white">
      <header className="border-b border-white/10 bg-gempak-darkBlue/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kopie%20von%20Gempak%20Logo%20Round-KX5OB11NFBLnN9fZA9PkvM4SmFodGu.png"
              alt="Gempakhub Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-gempak-yellow">GempakHub</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Welcome, User</span>
            <Link href="/">
              <button className="px-4 py-2 rounded-md bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-colors">
                Sign Out
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-gempak-darkBlue/80 backdrop-blur-md rounded-lg shadow-xl border border-white/10 p-8">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Welcome to GempakHub Platform</h1>
          <p className="text-white/70 mb-8 text-center">
            This is your dashboard where you can access all your content and manage your account.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <h2 className="text-xl font-bold mb-2 text-gempak-yellow">My Watchlist</h2>
              <p className="text-white/70 mb-4">Access your saved movies and shows</p>
              <button className="px-4 py-2 rounded-md bg-gempak-yellow text-gempak-darkBlue font-medium hover:bg-gempak-gold transition-colors shadow-md">
                View Watchlist
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <h2 className="text-xl font-bold mb-2 text-gempak-yellow">Continue Watching</h2>
              <p className="text-white/70 mb-4">Pick up where you left off</p>
              <button className="px-4 py-2 rounded-md bg-gempak-yellow text-gempak-darkBlue font-medium hover:bg-gempak-gold transition-colors shadow-md">
                Resume Watching
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center">
              <h2 className="text-xl font-bold mb-2 text-gempak-yellow">Browse Content</h2>
              <p className="text-white/70 mb-4">Discover new Tamil movies and shows</p>
              <button className="px-4 py-2 rounded-md bg-gempak-yellow text-gempak-darkBlue font-medium hover:bg-gempak-gold transition-colors shadow-md">
                Browse Library
              </button>
            </div>
          </div>

          <div className="text-center">
            <Link href="/">
              <button className="px-4 py-2 rounded-md bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-colors">
                Back to Landing Page
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gempak-deepBlue py-6 text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} GempakHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

