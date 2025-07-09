'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Loading } from './Loading'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  loadingText?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  ripple?: boolean
  soundEffect?: boolean
}

const variants = {
  primary: 'btn-elegant bg-gradient-elegant text-wood-brown shadow-elegant hover:shadow-elegant-hover',
  secondary: 'bg-transparent border border-sweet-potato-300 text-text-primary hover:bg-sweet-potato-50',
  ghost: 'bg-transparent text-wood-brown hover:bg-warm-beige/50',
  outline: 'bg-transparent border border-wood-brown text-wood-brown hover:bg-wood-brown hover:text-ivory'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base', 
  lg: 'px-8 py-4 text-lg'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  loadingText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ripple = true,
  soundEffect = false,
  disabled,
  onClick,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  // Sound effect (optional)
  const playSound = () => {
    if (soundEffect && typeof window !== 'undefined') {
      // Create a subtle click sound using Web Audio API
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    }
  }

  // Ripple effect
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (ripple) {
      const newRipple = { id: Date.now(), x, y }
      setRipples(prev => [...prev, newRipple])
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 600)
    }

    if (soundEffect) {
      playSound()
    }

    if (onClick) {
      onClick(e)
    }
  }

  const isDisabled = disabled || loading

  return (
    <motion.button
      className={cn(
        'relative overflow-hidden font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wood-brown/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        'rounded-elegant shimmer-effect',
        variant === 'primary' && 'btn-sweet-potato',
        className
      )}
      disabled={isDisabled}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={!isDisabled ? { 
        scale: 1.02,
        y: -1
      } : undefined}
      whileTap={!isDisabled ? { 
        scale: 0.98,
        y: 0
      } : undefined}
      animate={isPressed && !isDisabled ? {
        scale: 0.95
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30 
      }}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      
      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-2"
            >
              <Loading variant="dots" size="sm" />
              {loadingText && <span>{loadingText}</span>}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-2"
            >
              {icon && iconPosition === 'left' && (
                <motion.span
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.span>
              )}
              {children}
              {icon && iconPosition === 'right' && (
                <motion.span
                  whileHover={{ rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </span>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-elegant bg-gradient-to-r from-sweet-potato-400/20 to-wood-brown/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
    </motion.button>
  )
}

// Floating Action Button
export const FloatingActionButton: React.FC<{
  icon: React.ReactNode
  onClick?: () => void
  className?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  tooltip?: string
}> = ({ 
  icon, 
  onClick, 
  className,
  position = 'bottom-right',
  tooltip
}) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  }

  return (
    <div className={cn('fixed z-40', positionClasses[position])}>
      <motion.button
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 8px 25px rgba(212, 149, 90, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        onClick={onClick}
        className={cn(
          'w-14 h-14 rounded-full bg-gradient-to-br from-sweet-potato-500 to-sweet-potato-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center',
          className
        )}
      >
        <motion.span
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.span>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className={cn(
              'absolute bg-text-primary text-ivory px-3 py-2 rounded-soft text-sm font-medium whitespace-nowrap',
              position.includes('right') ? 'right-0 mb-2 bottom-full' : 'left-0 mb-2 bottom-full'
            )}
          >
            {tooltip}
            <div 
              className={cn(
                'absolute w-2 h-2 bg-text-primary rotate-45',
                position.includes('right') ? 'right-3 -bottom-1' : 'left-3 -bottom-1'
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Button Group Component
export const ButtonGroup: React.FC<{
  children: React.ReactNode
  className?: string
  orientation?: 'horizontal' | 'vertical'
}> = ({ children, className, orientation = 'horizontal' }) => {
  return (
    <div 
      className={cn(
        'flex',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        '[&>button]:rounded-none [&>button:first-child]:rounded-l-elegant [&>button:last-child]:rounded-r-elegant',
        orientation === 'vertical' && '[&>button:first-child]:rounded-t-elegant [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-b-elegant [&>button:last-child]:rounded-r-none',
        className
      )}
    >
      {children}
    </div>
  )
} 