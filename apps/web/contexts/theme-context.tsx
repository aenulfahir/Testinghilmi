"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("hilmi-theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      setTheme(systemTheme)
    }
    
    // Apply theme immediately
    const root = document.documentElement
    const currentTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    root.classList.remove("light", "dark")
    root.classList.add(currentTheme)
    
    // Force update body
    if (currentTheme === "dark") {
      document.body.style.backgroundColor = "hsl(0 0% 6%)"
      document.body.style.color = "hsl(0 0% 100%)"
    } else {
      document.body.style.backgroundColor = "hsl(0 0% 100%)"
      document.body.style.color = "hsl(0 0% 11%)"
    }
  }, [])

  useEffect(() => {
    // Update document class and localStorage
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    
    // Force update body background
    if (theme === "dark") {
      document.body.style.backgroundColor = "hsl(0 0% 6%)"
      document.body.style.color = "hsl(0 0% 100%)"
    } else {
      document.body.style.backgroundColor = "hsl(0 0% 100%)"
      document.body.style.color = "hsl(0 0% 11%)"
    }
    
    localStorage.setItem("hilmi-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
} 