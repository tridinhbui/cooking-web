'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'elegant' | 'floating'
  hoverEffect?: boolean
  tiltEffect?: boolean
  withShadow?: boolean
  withSteam?: boolean
  onClick?: () => void
}

const cardVariants = {
  default: 'bg-ivory border border-ceramic-taupe/20 shadow-soft',
  glass: 'glass-card',
  elegant: 'card-elegant',
  floating: 'glass-card shadow-elegant animate-float'
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hoverEffect = true,
  tiltEffect = false,
  withShadow = true,
  withSteam = false,
  onClick
}) => {
  const isClickable = !!onClick

  return (
    <motion.div
      whileHover={hoverEffect ? { 
        y: -5, 
        scale: 1.02,
        rotateX: tiltEffect ? 2 : 0,
        rotateY: tiltEffect ? 1 : 0
      } : undefined}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
      className={cn(
        'relative rounded-elegant p-6 transition-all duration-300 transform-gpu',
        cardVariants[variant],
        withShadow && 'shadow-elegant hover:shadow-elegant-hover',
        isClickable && 'cursor-pointer',
        withSteam && 'steam-effect',
        tiltEffect && 'parallax-element',
        className
      )}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Background sparkle effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-4 right-4 w-2 h-2 bg-soft-gold rounded-full animate-pulse" />
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-wood-brown rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-ceramic-taupe rounded-full animate-pulse delay-700" />
      </div>

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Glow effect on hover */}
      {hoverEffect && (
        <div className="absolute inset-0 rounded-elegant bg-gradient-to-br from-soft-gold/5 to-wood-brown/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      )}

      {/* Steam effect for hot dishes */}
      {withSteam && (
        <>
          <div className="absolute top-2 left-1/2 w-0.5 h-8 bg-gradient-to-t from-white/30 to-transparent animate-steam" />
          <div className="absolute top-2 left-1/2 w-0.5 h-6 bg-gradient-to-t from-white/20 to-transparent animate-steam delay-500" style={{ marginLeft: '4px' }} />
          <div className="absolute top-2 left-1/2 w-0.5 h-7 bg-gradient-to-t from-white/25 to-transparent animate-steam delay-1000" style={{ marginLeft: '-4px' }} />
        </>
      )}
    </motion.div>
  )
}

export default Card 