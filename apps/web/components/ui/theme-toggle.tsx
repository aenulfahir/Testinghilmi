"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "./button"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: [1, 1.2, 1],
          rotate: theme === "dark" ? [0, 180, 360] : [360, 180, 0],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-primary" />
        ) : (
          <Moon className="h-5 w-5 text-primary" />
        )}
      </motion.div>
      
      {/* Background circle animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Button>
  )
} 