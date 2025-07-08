'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurOverlayProps {
  children?: React.ReactNode
  isOpen: boolean
  onClose?: () => void
  intensity?: 'light' | 'medium' | 'strong'
  variant?: 'default' | 'elegant' | 'sunset'
  className?: string
  closeOnClickOutside?: boolean
}

const intensityVariants = {
  light: 'backdrop-blur-sm',
  medium: 'backdrop-blur-md',
  strong: 'backdrop-blur-lg'
}

const variantStyles = {
  default: 'bg-black/20',
  elegant: 'bg-wood-brown/10',
  sunset: 'bg-sunset-brown/15'
}

export const BlurOverlay: React.FC<BlurOverlayProps> = ({
  children,
  isOpen,
  onClose,
  intensity = 'medium',
  variant = 'elegant',
  className,
  closeOnClickOutside = true
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnClickOutside && onClose && e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center',
            intensityVariants[intensity],
            variantStyles[variant],
            className
          )}
          onClick={handleBackdropClick}
        >
          {/* Glass overlay effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          />

          {/* Sparkle effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-soft-gold/30 rounded-full animate-pulse" />
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pearl-white/40 rounded-full animate-pulse delay-500" />
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-wood-brown/20 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-ceramic-taupe/30 rounded-full animate-pulse delay-1500" />
          </div>

          {/* Content */}
          {children && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut",
                delay: 0.1 
              }}
              className="relative z-10"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Modal wrapper with glass panel
export const GlassModal: React.FC<{
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}> = ({
  children,
  isOpen,
  onClose,
  title,
  size = 'md',
  className
}) => {
  const sizeVariants = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  return (
    <BlurOverlay isOpen={isOpen} onClose={onClose} variant="elegant">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          'relative w-full mx-4',
          sizeVariants[size]
        )}
      >
        {/* Glass panel */}
        <div 
          className={cn(
            'glass-card-strong rounded-elegant overflow-hidden',
            className
          )}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 100%)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
          }}
        >
          {/* Header */}
          {(title || onClose) && (
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              {title && (
                <h2 className="text-xl font-serif font-medium text-wood-brown">
                  {title}
                </h2>
              )}
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-ceramic-taupe"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </motion.div>
    </BlurOverlay>
  )
}

export default BlurOverlay 