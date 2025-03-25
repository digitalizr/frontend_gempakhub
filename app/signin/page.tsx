"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Home, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SignInPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    form: "",
  })

  const savedUsers = [
    { username: "gempak", source: "From this website" },
    { username: "mohan2", source: "From this website" },
    { username: "admin", source: "download.gempakhub.com" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name as keyof typeof errors]: "" }))
    }
  }

  const handleSelectUser = (username: string) => {
    setFormData((prev) => ({ ...prev, username }))
    setShowDropdown(false)
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required"
      valid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      // Here you would call your API endpoint
      // const response = await fetch('/api/signin', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     password: formData.password,
      //     rememberMe: formData.rememberMe
      //   })
      // });

      // if (response.ok) {
      //   // Redirect to platform home page
      //   router.push('/home');
      // } else {
      //   setErrors(prev => ({ ...prev, form: "Invalid username or password" }));
      // }

      // For now, just redirect to home page
      router.push("/home")
    } catch (error) {
      console.error("Sign in failed:", error)
      setErrors((prev) => ({ ...prev, form: "An error occurred. Please try again." }))
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-blue">
      <header className="p-4">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Home className="h-6 w-6" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kopie%20von%20Gempak%20Logo%20Round-KX5OB11NFBLnN9fZA9PkvM4SmFodGu.png"
            alt="Gempakhub Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-gempak-yellow">GEMPAK</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gempak-darkBlue/80 backdrop-blur-md rounded-lg shadow-xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white">Please sign in</h1>
          </div>

          {errors.form && (
            <div className="bg-destructive/15 text-destructive px-4 py-3 rounded-md mb-6">{errors.form}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gempak-yellow">
                User
              </label>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gempak-yellow focus:border-transparent pr-10"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  onClick={() => setShowDropdown(true)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <ChevronDown className="h-5 w-5" />
                </button>

                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-10 overflow-hidden">
                    {savedUsers.map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-0"
                        onClick={() => handleSelectUser(user.username)}
                      >
                        <div className="w-8 h-8 bg-gempak-darkBlue rounded-md flex items-center justify-center text-white mr-3">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{user.username}</div>
                          <div className="text-xs text-gray-500">{user.source}</div>
                        </div>
                      </div>
                    ))}
                    <div className="p-2 border-t border-gray-200">
                      <button
                        type="button"
                        className="w-full text-left text-sm text-gray-700 p-2 hover:bg-gray-100 rounded"
                      >
                        Manage Passwords
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {errors.username && <p className="text-sm text-gempak-yellow">{errors.username}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gempak-yellow">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gempak-yellow focus:border-transparent"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-gempak-yellow">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 rounded-md bg-gempak-yellow text-gempak-darkBlue font-medium hover:bg-gempak-gold transition-colors shadow-md"
            >
              Sign In
            </button>

            <button
              type="button"
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-colors"
            >
              Use Quick Connect
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

