'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  intensity?: 'light' | 'medium' | 'strong'
  borderGradient?: boolean
  floating?: boolean
  onClick?: () => void
}

const intensityVariants = {
  light: 'backdrop-blur-sm bg-white/10 border-white/10',
  medium: 'backdrop-blur-md bg-white/20 border-white/20', 
  strong: 'backdrop-blur-lg bg-white/30 border-white/30'
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className,
  intensity = 'medium',
  borderGradient = true,
  floating = false,
  onClick
}) => {
  return (
    <motion.div
      initial={floating ? { opacity: 0, y: 20 } : undefined}
      animate={floating ? { opacity: 1, y: 0 } : undefined}
      whileHover={onClick ? { 
        scale: 1.02, 
        y: -2,
        boxShadow: '0 20px 40px rgba(139, 111, 71, 0.15)'
      } : undefined}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
      className={cn(
        'relative rounded-elegant border transition-all duration-300',
        intensityVariants[intensity],
        borderGradient && 'border-gradient-pearl',
        floating && 'shadow-elegant hover:shadow-elegant-hover',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      style={{
        background: borderGradient 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)'
          : undefined,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      {/* Pearl gradient border overlay */}
      {borderGradient && (
        <div 
          className="absolute inset-0 rounded-elegant p-px"
          style={{
            background: 'linear-gradient(135deg, rgba(252, 250, 247, 0.8) 0%, rgba(232, 213, 213, 0.5) 50%, rgba(184, 168, 152, 0.8) 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'subtract',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'subtract'
          }}
        />
      )}

      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden rounded-elegant">
        <div className="absolute top-4 right-6 w-1 h-1 bg-soft-gold/60 rounded-full animate-pulse" />
        <div className="absolute bottom-6 left-8 w-0.5 h-0.5 bg-pearl-white/80 rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-wood-brown/40 rounded-full animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Hover glow effect */}
      {onClick && (
        <div className="absolute inset-0 rounded-elegant bg-gradient-to-br from-soft-gold/5 to-wood-brown/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
    </motion.div>
  )
}

export default GlassPanel 