'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingElementProps {
  children?: React.ReactNode
  className?: string
  type?: 'particle' | 'sparkle' | 'ingredient' | 'steam'
  size?: 'sm' | 'md' | 'lg'
  duration?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'circular'
  opacity?: number
}

const sizeVariants = {
  sm: 'w-2 h-2',
  md: 'w-4 h-4',
  lg: 'w-6 h-6'
}

const typeVariants = {
  particle: 'bg-wood-brown/20 rounded-full',
  sparkle: 'bg-soft-gold/40 rounded-full animate-pulse',
  ingredient: 'bg-ceramic-taupe/30 rounded-lg',
  steam: 'bg-white/20 rounded-full blur-sm'
}

const getAnimationVariants = (direction: string, duration: number) => {
  const distance = 50

  switch (direction) {
    case 'up':
      return {
        animate: {
          y: [-distance, distance, -distance],
          opacity: [0.3, 0.8, 0.3]
        }
      }
    case 'down':
      return {
        animate: {
          y: [distance, -distance, distance],
          opacity: [0.3, 0.8, 0.3]
        }
      }
    case 'left':
      return {
        animate: {
          x: [-distance, distance, -distance],
          opacity: [0.3, 0.8, 0.3]
        }
      }
    case 'right':
      return {
        animate: {
          x: [distance, -distance, distance],
          opacity: [0.3, 0.8, 0.3]
        }
      }
    case 'circular':
      return {
        animate: {
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.7, 0.3]
        }
      }
    default:
      return {
        animate: {
          y: [-10, 10, -10],
          opacity: [0.3, 0.8, 0.3]
        }
      }
  }
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className,
  type = 'particle',
  size = 'md',
  duration = 6,
  delay = 0,
  direction = 'up',
  opacity = 0.5
}) => {
  const animationVariants = getAnimationVariants(direction, duration)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: opacity,
        ...animationVariants.animate
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
      className={cn(
        'absolute pointer-events-none',
        sizeVariants[size],
        typeVariants[type],
        className
      )}
      style={{ opacity }}
    >
      {children}
    </motion.div>
  )
}

// Preset floating ingredients
export const FloatingIngredients: React.FC<{
  className?: string
  count?: number
}> = ({ className, count = 8 }) => {
  const ingredients = ['🌿', '🧄', '🫒', '🧅', '🥕', '🍅', '🌶️', '🧈']
  
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <FloatingElement
          key={i}
          type="ingredient"
          size={Math.random() > 0.5 ? 'md' : 'sm'}
          duration={4 + Math.random() * 4}
          delay={i * 0.5}
          direction={['up', 'down', 'circular'][Math.floor(Math.random() * 3)] as any}
          opacity={0.15 + Math.random() * 0.15}
          className={`
            top-${Math.floor(Math.random() * 80) + 10}% 
            left-${Math.floor(Math.random() * 80) + 10}%
          `}
        >
          <span className="text-lg">
            {ingredients[i % ingredients.length]}
          </span>
        </FloatingElement>
      ))}
    </div>
  )
}

// Sparkle field effect
export const SparkleField: React.FC<{
  className?: string
  density?: 'low' | 'medium' | 'high'
}> = ({ className, density = 'medium' }) => {
  const counts = {
    low: 5,
    medium: 10,
    high: 15
  }
  
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: counts[density] }).map((_, i) => (
        <FloatingElement
          key={i}
          type="sparkle"
          size={Math.random() > 0.7 ? 'md' : 'sm'}
          duration={3 + Math.random() * 3}
          delay={i * 0.3}
          direction="circular"
          opacity={0.2 + Math.random() * 0.3}
          className={`
            top-${Math.floor(Math.random() * 90) + 5}% 
            left-${Math.floor(Math.random() * 90) + 5}%
          `}
        />
      ))}
    </div>
  )
}

export default FloatingElement 