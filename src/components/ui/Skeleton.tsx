'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'default' | 'rounded' | 'circle' | 'text'
  animation?: 'pulse' | 'wave' | 'shimmer'
  width?: string | number
  height?: string | number
}

const variantStyles = {
  default: 'rounded-md',
  rounded: 'rounded-lg',
  circle: 'rounded-full',
  text: 'rounded-sm'
}

const animationVariants = {
  pulse: {
    opacity: [0.5, 1, 0.5],
  },
  wave: {
    x: ['-100%', '100%'],
  },
  shimmer: {
    backgroundPosition: ['-200px 0', '200px 0'],
  }
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'default',
  animation = 'shimmer',
  width,
  height,
  ...props
}) => {
  return (
    <div className={cn('relative overflow-hidden', className)} style={{ width, height }}>
      <motion.div
        animate={animation === 'shimmer' ? animationVariants.shimmer : animationVariants[animation]}
        transition={
          animation === 'shimmer'
            ? {
                backgroundPosition: animationVariants.shimmer.backgroundPosition,
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear'
              }
            : {
                duration: animation === 'pulse' ? 1.5 : 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }
        }
        className={cn(
          'h-full w-full',
          variantStyles[variant],
          animation === 'shimmer' 
            ? 'bg-gradient-to-r from-warm-beige via-dusty-pink to-warm-beige bg-[length:200px_100%]'
            : 'bg-warm-beige'
        )}
        {...props}
      />
      
      {animation === 'wave' && (
        <motion.div
          animate={animationVariants.wave}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className={cn(
            'absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent',
            variantStyles[variant]
          )}
        />
      )}
    </div>
  )
}

// Pre-built skeleton components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-32 w-full" variant="rounded" />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-20" variant="rounded" />
        <Skeleton className="h-8 w-20" variant="rounded" />
      </div>
    </div>
  )
}

export const SkeletonAvatar: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  }
  
  return <Skeleton variant="circle" className={sizes[size]} />
}

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className 
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn(
            'h-4',
            i === lines - 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  )
}

export const SkeletonButton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Skeleton 
      variant="rounded" 
      className={cn('h-10 w-24', className)}
      animation="pulse"
    />
  )
} 