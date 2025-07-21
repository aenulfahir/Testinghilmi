"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimatedSectionProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 30 }
      case "down":
        return { opacity: 0, y: -30 }
      case "left":
        return { opacity: 0, x: 30 }
      case "right":
        return { opacity: 0, x: -30 }
      default:
        return { opacity: 0, y: 30 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 1, y: 0 }
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
        return { opacity: 1, x: 0 }
      case "right":
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection 