"use client"

import React from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Play, Users, Calendar, CheckCircle, Menu, X } from "lucide-react"

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Handle smooth scrolling for navigation links
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-blue text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gempak-darkBlue/90 backdrop-blur-sm">
        <div className="container-symmetric flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kopie%20von%20Gempak%20Logo%20Round-KX5OB11NFBLnN9fZA9PkvM4SmFodGu.png"
              alt="Gempakhub Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gempak-yellow">GempakHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-white hover:text-gempak-yellow transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-white hover:text-gempak-yellow transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("content")}
              className="text-sm font-medium text-white hover:text-gempak-yellow transition-colors"
            >
              Content
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-white hover:text-gempak-yellow transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/signin" className="hidden sm:block">
              <button className="px-4 py-2 text-sm font-medium text-white hover:text-gempak-yellow transition-colors">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 rounded-md bg-gempak-yellow text-gempak-darkBlue font-medium hover:bg-gempak-gold transition-colors shadow-md">
                Start Free Trial
              </button>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gempak-navy border-b border-white/10">
            <div className="container-symmetric py-4 space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-md"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-md"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("content")}
                className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-md"
              >
                Content
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-md"
              >
                FAQ
              </button>
              <Link to="/signin" className="block sm:hidden">
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-md">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-blue opacity-90 z-10" />
          <div className="absolute inset-0">
            <img
              src="/placeholder.svg?height=800&width=1600"
              alt="Tamil Movie Banner"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="container-symmetric relative z-20 py-20 md:py-32 lg:py-40 flex items-center min-h-[calc(100vh-4rem)]">
            <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0 space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
                First Ever Tamil Social OTT in the World
              </h1>
              <p className="text-xl text-text-muted">
                Stream the latest Tamil movies and series in Ultra HD quality. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/signup">
                  <button className="btn-primary w-full sm:w-auto">
                    Start Free Trial <ChevronRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
              <p className="text-sm text-text-muted">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-padding bg-gempak-navy">
          <div className="container-symmetric">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">Why Choose GempakHub?</h2>
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                Experience the best of Tamil entertainment like never before
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gempak-yellow/20 flex items-center justify-center mb-6">
                  <Play className="h-6 w-6 text-gempak-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Ultra HD Streaming</h3>
                <p className="text-text-muted">
                  Enjoy crystal clear picture quality with our Ultra HD streaming technology.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gempak-yellow/20 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-gempak-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Multi-Device Access</h3>
                <p className="text-text-muted">Stream on up to two devices simultaneously with our standard plan.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gempak-yellow/20 flex items-center justify-center mb-6">
                  <Calendar className="h-6 w-6 text-gempak-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Latest Releases</h3>
                <p className="text-text-muted">
                  Get access to the latest Tamil movies and series as soon as they're released.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Showcase */}
        <section id="content" className="section-padding bg-gradient-blue">
          <div className="container-symmetric">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">Featured Content</h2>
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                Explore our vast library of Tamil movies and series
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-lg aspect-[2/3]">
                  <img
                    src={`/placeholder.svg?height=400&width=300&text=Movie ${item}`}
                    alt={`Tamil Movie ${item}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h3 className="text-white font-bold">Tamil Movie Title</h3>
                      <p className="text-gray-300 text-sm">2023 • Action, Drama</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/signup">
                <button className="btn-primary">
                  Unlock All Content <ChevronRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-gempak-navy">
          <div className="container-symmetric">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">Simple, Affordable Pricing</h2>
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
                Start with a 1-month free trial, cancel anytime
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gempak-yellow/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white">Germany</h3>
                  <div className="mt-3">
                    <span className="text-4xl font-bold text-gempak-yellow">€4.99</span>
                    <span className="text-text-muted">/month</span>
                  </div>
                  <p className="text-sm text-text-muted mt-2">after free trial</p>
                </div>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">Ultra HD Streaming</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">2 Devices Simultaneously</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">Cancel Anytime</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/signup" className="block">
                    <button className="w-full btn-primary">Start Free Trial</button>
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gempak-yellow/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white">US & Canada</h3>
                  <div className="mt-3">
                    <span className="text-4xl font-bold text-gempak-yellow">$4.99</span>
                    <span className="text-text-muted">/month</span>
                  </div>
                  <p className="text-sm text-text-muted mt-2">after free trial</p>
                </div>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">Ultra HD Streaming</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">2 Devices Simultaneously</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">Cancel Anytime</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/signup" className="block">
                    <button className="w-full btn-primary">Start Free Trial</button>
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gempak-yellow/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white">Malaysia</h3>
                  <div className="mt-3">
                    <span className="text-4xl font-bold text-gempak-yellow">RM 19.99</span>
                    <span className="text-text-muted">/month</span>
                  </div>
                  <p className="text-sm text-text-muted mt-2">after free trial</p>
                </div>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">Ultra HD Streaming</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">2 Devices Simultaneously</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gempak-yellow mr-3 flex-shrink-0" />
                    <span className="text-white">Cancel Anytime</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/signup" className="block">
                    <button className="w-full btn-primary">Start Free Trial</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding bg-gradient-blue">
          <div className="container-symmetric">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">Got questions? We've got answers</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-white">What is GempakHub?</h3>
                <p className="text-text-muted">
                  GempakHub is the first ever Tamil Social OTT platform in the world, offering the latest Tamil movies
                  and series in Ultra HD quality.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-white">How does the free trial work?</h3>
                <p className="text-text-muted">
                  You get a full month free when you sign up. You can cancel anytime before the trial ends and you won't
                  be charged.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-white">How many devices can I watch on?</h3>
                <p className="text-text-muted">
                  With our standard plan, you can stream on up to two devices simultaneously.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-white">Can I cancel my subscription?</h3>
                <p className="text-text-muted">
                  Yes, you can cancel your subscription at any time. There are no contracts or cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gempak-darkBlue border-t border-white/10">
          <div className="container-symmetric text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Ready to Experience GempakHub?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-text-muted">
              Join thousands of Tamil movie lovers and start your free trial today.
            </p>
            <Link to="/signup">
              <button className="btn-primary">Start Your Free Trial</button>
            </Link>
            <p className="mt-6 text-sm text-text-muted">No credit card required. Cancel anytime.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gempak-deepBlue py-16 text-white border-t border-white/10">
        <div className="container-symmetric">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kopie%20von%20Gempak%20Logo%20Round-KX5OB11NFBLnN9fZA9PkvM4SmFodGu.png"
                  alt="Gempakhub Logo"
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-gempak-yellow">GempakHub</span>
              </div>
              <p className="text-text-muted">
                First ever Tamil Social OTT in the World. Stream the latest Tamil movies and series in Ultra HD.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-gempak-yellow">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-gempak-yellow">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-gempak-yellow">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-muted hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-text-muted">
            <p>© {new Date().getFullYear()} GempakHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

