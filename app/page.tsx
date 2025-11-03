"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Demo from "@/components/demo"
import Features from "@/components/features"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ChatbotIcon from "@/components/chatbot-icon"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <Navigation />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <HowItWorks />
        <Demo />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatbotIcon />
    </div>
  )
}
