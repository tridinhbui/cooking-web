'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
  gradient?: boolean
}

// Heading component with Playfair Display
export const Heading: React.FC<TypographyProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  elegant?: boolean
}> = ({ 
  children, 
  className, 
  level = 1, 
  animate = false,
  gradient = false,
  elegant = true
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  const sizes = {
    1: 'text-5xl md:text-6xl lg:text-7xl',
    2: 'text-4xl md:text-5xl lg:text-6xl', 
    3: 'text-3xl md:text-4xl lg:text-5xl',
    4: 'text-2xl md:text-3xl lg:text-4xl',
    5: 'text-xl md:text-2xl lg:text-3xl',
    6: 'text-lg md:text-xl lg:text-2xl'
  }

  const MotionTag = motion[Tag as keyof typeof motion] as any

  const Component = animate ? MotionTag : Tag

  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  } : {}

  return (
    <Component
      {...motionProps}
      className={cn(
        'font-serif font-medium leading-tight tracking-tight',
        sizes[level],
        elegant && (gradient ? 'text-elegant' : 'text-wood-brown'),
        className
      )}
    >
      {children}
    </Component>
  )
}

// Handwritten text component with Dancing Script
export const Handwritten: React.FC<TypographyProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}> = ({ 
  children, 
  className, 
  size = 'md',
  animate = false,
  gradient = false
}) => {
  const sizes = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl'
  }

  const Component = animate ? motion.p : 'p'

  const motionProps = animate ? {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  } : {}

  return (
    <Component
      {...(animate ? motionProps : {})}
      className={cn(
        'font-handwritten leading-relaxed',
        sizes[size],
        gradient ? 'text-elegant' : 'text-wood-brown',
        className
      )}
    >
      {children}
    </Component>
  )
}

// Body text component
export const Text: React.FC<TypographyProps & {
  size?: 'sm' | 'md' | 'lg'
  weight?: 'light' | 'normal' | 'medium' | 'semibold'
  as?: 'p' | 'span' | 'div'
}> = ({ 
  children, 
  className, 
  size = 'md',
  weight = 'normal',
  as = 'p',
  animate = false,
  gradient = false
}) => {
  const sizes = {
    sm: 'text-sm md:text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl'
  }

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold'
  }

  const Component = animate ? motion[as] : as

  const motionProps = animate ? {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  } : {}

  return (
    <Component
      {...(animate ? motionProps : {})}
      className={cn(
        'font-body leading-relaxed',
        sizes[size],
        weights[weight],
        gradient ? 'text-elegant' : 'text-ceramic-taupe',
        className
      )}
    >
      {children}
    </Component>
  )
}

// Quote component for special text
export const Quote: React.FC<TypographyProps & {
  author?: string
}> = ({ 
  children, 
  className, 
  author,
  animate = false
}) => {
  const Component = animate ? motion.blockquote : 'blockquote'

  const motionProps = animate ? {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  } : {}

  return (
    <div className="relative">
      {/* Decorative quote marks */}
      <div className="absolute -top-4 -left-4 text-6xl text-dusty-pink/30 font-serif">"</div>
      
      <Component
        {...(animate ? motionProps : {})}
        className={cn(
          'relative font-serif text-xl md:text-2xl leading-relaxed text-wood-brown italic pl-8 pr-4',
          className
        )}
      >
        {children}
        {author && (
          <footer className="mt-4 text-ceramic-taupe font-body text-base not-italic">
            — {author}
          </footer>
        )}
      </Component>
      
      <div className="absolute -bottom-4 -right-4 text-6xl text-dusty-pink/30 font-serif rotate-180">"</div>
    </div>
  )
}

// Gradient text effect
export const GradientText: React.FC<{
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
}> = ({ 
  children, 
  className,
  from = 'wood-brown',
  to = 'ceramic-taupe'
}) => {
  return (
    <span 
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent',
        `from-${from} to-${to}`,
        className
      )}
    >
      {children}
    </span>
  )
}

// Typewriter effect component
export const Typewriter: React.FC<{
  text: string
  className?: string
  speed?: number
  delay?: number
}> = ({ 
  text, 
  className,
  speed = 100,
  delay = 0
}) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, delay])

  return (
    <span className={cn('font-handwritten', className)}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
} 