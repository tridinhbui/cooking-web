'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  withShimmer?: boolean
  withGlow?: boolean
  children: React.ReactNode
}

const buttonVariants = {
  primary: 'btn-elegant bg-gradient-elegant text-wood-brown shadow-elegant hover:shadow-elegant-hover',
  secondary: 'bg-ceramic-taupe text-ivory hover:bg-wood-brown transition-colors duration-300',
  ghost: 'bg-transparent text-wood-brown hover:bg-warm-beige/50 transition-colors duration-300',
  outline: 'border-2 border-wood-brown text-wood-brown hover:bg-wood-brown hover:text-ivory transition-all duration-300'
}

const sizeVariants = {
  sm: 'px-4 py-2 text-sm rounded-soft',
  md: 'px-6 py-3 text-base rounded-elegant',
  lg: 'px-8 py-4 text-lg rounded-elegant'
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  withShimmer = true,
  withGlow = false,
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative overflow-hidden font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wood-brown/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        sizeVariants[size],
        withShimmer && variant === 'primary' && 'shimmer-effect',
        withGlow && 'hover:shadow-glow',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shimmer overlay for primary button */}
      {withShimmer && variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      )}
      
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </div>
      )}
      
      {/* Button content */}
      <span className={cn('relative z-10', isLoading && 'opacity-0')}>
        {children}
      </span>
      
      {/* Glow effect */}
      {withGlow && (
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-soft-gold/20 to-wood-brown/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.button>
  )
}

export default Button 