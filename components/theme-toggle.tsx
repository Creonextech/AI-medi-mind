"use client"

import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-4 sm:right-6 lg:right-8 z-40 w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-muted transition"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
    </button>
  )
}
