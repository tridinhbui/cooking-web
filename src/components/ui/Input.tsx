'use client'

import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
  variant?: 'default' | 'elegant' | 'glass'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const inputVariants = {
  default: 'border border-ceramic-taupe/30 bg-ivory focus:border-wood-brown',
  elegant: 'input-elegant',
  glass: 'glass-card border border-white/20 bg-transparent focus:border-soft-gold'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helpText,
  variant = 'elegant',
  icon,
  iconPosition = 'left',
  className,
  ...props
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-wood-brown">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-ceramic-taupe">
            {icon}
          </div>
        )}
        
        <motion.input
          ref={ref}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            'w-full px-4 py-3 rounded-soft transition-all duration-300 placeholder:text-ceramic-taupe/60 focus:outline-none focus:ring-2 focus:ring-wood-brown/20 focus:shadow-elegant',
            inputVariants[variant],
            icon && iconPosition === 'left' && 'pl-10',
            icon && iconPosition === 'right' && 'pr-10',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-200',
            className
          )}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-ceramic-taupe">
            {icon}
          </div>
        )}
        
        {/* Focus glow effect */}
        <div className="absolute inset-0 rounded-soft bg-gradient-to-r from-soft-gold/10 to-wood-brown/10 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100" />
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
      
      {helpText && !error && (
        <p className="text-sm text-ceramic-taupe">
          {helpText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input 