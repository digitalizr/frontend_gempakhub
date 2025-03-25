"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SignUpPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    countryCode: "+1",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    form: "",
  })
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name as keyof typeof errors]: "" }))
    }
  }

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, countryCode: e.target.value }))
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
      valid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      valid = false
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setErrors((prev) => ({ ...prev, form: "" }))

    try {
      // Direct API call to Gempakhub API
      const jellyfinApiKey = "2334d422878c44d293bbb6254e337538" // This should ideally be stored securely
      const jellyfinApiUrl = "http://gempakhub.com/Users/New"

      const response = await fetch(jellyfinApiUrl, {
        method: "POST",
        headers: {
          Authorization: `MediaBrowser Token=${jellyfinApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: formData.username,
          Password: formData.password,
          HasPassword: true,
          Policy: {
            IsAdministrator: false,
            EnableRemoteAccess: true,
            AuthenticationProviderId: "default",
            PasswordResetProviderId: "default",
          },
          Configuration: {
            EnableAutoLogin: false,
          },
        }),
      })

      if (response.ok) {
        // User created successfully
        const data = await response.json()
        console.log("User created successfully:", data)

        // Show success message
        setSuccess(true)

        // Redirect to external sign in page after 3 seconds
        setTimeout(() => {
          window.location.href = "https://gempakhub.com/web/#/login.html"
        }, 3000)
      } else {
        // Handle API error
        const errorData = await response.json()
        setErrors((prev) => ({
          ...prev,
          form: errorData.message || "Error creating user. Please try again.",
        }))
      }
    } catch (error) {
      console.error("Signup failed:", error)
      setErrors((prev) => ({
        ...prev,
        form: "Network error. Please check your connection and try again.",
      }))
    } finally {
      setIsLoading(false)
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
            <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
            <p className="text-white/60 mt-2">Join GempakHub and start streaming Tamil content</p>
          </div>

          {errors.form && <div className="bg-red-500/15 text-red-500 px-4 py-3 rounded-md mb-6">{errors.form}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gempak-yellow">
                Username
              </label>
              <input
                id="username"
                name="username"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gempak-yellow focus:border-transparent"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="text-sm text-gempak-yellow">{errors.username}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gempak-yellow">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gempak-yellow focus:border-transparent"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-sm text-gempak-yellow">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gempak-yellow">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={handleCountryCodeChange}
                  className="w-[100px] px-3 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gempak-yellow focus:border-transparent"
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+49">+49 (DE)</option>
                  <option value="+60">+60 (MY)</option>
                  <option value="+91">+91 (IN)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gempak-yellow focus:border-transparent"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              {errors.phoneNumber && <p className="text-sm text-gempak-yellow">{errors.phoneNumber}</p>}
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
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </button>
              </div>
              {errors.password && <p className="text-sm text-gempak-yellow">{errors.password}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gempak-yellow">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gempak-yellow focus:border-transparent"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-sm text-gempak-yellow">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 rounded-md bg-gempak-yellow text-gempak-darkBlue font-medium hover:bg-gempak-gold transition-colors shadow-md flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          {success && (
            <div className="mt-6 bg-green-500/15 text-green-500 px-4 py-3 rounded-md text-center">
              <p className="font-medium">Account created successfully!</p>
              <p className="text-sm mt-1">Redirecting you to the login page...</p>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-white/60">
              Already have an account?{" "}
              <a href="http://gempakhub.com/web/#/login.html" className="text-gempak-yellow hover:underline">
                Sign In
              </a>
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs text-center text-white/60">
              By signing up, you agree to our{" "}
              <Link href="#" className="text-gempak-yellow hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-gempak-yellow hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

