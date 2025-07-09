'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'wave' | 'sweet-potato' | 'text'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  text?: string
  overlay?: boolean
}

const sizeVariants = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8', 
  lg: 'w-12 h-12'
}

// Sweet Potato Spinner
const SweetPotatoSpinner: React.FC<{ size: string }> = ({ size }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className={cn('relative', size)}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [-10, 10, -10]
        }}
        transition={{ 
          duration: 1, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-sweet-potato-500 text-2xl"
      >
        🍠
      </motion.div>
      
      {/* Rotating sparkles */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-sweet-potato-400 rounded-full" />
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-sweet-potato-400 rounded-full" />
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-sweet-potato-400 rounded-full" />
        <div className="absolute top-1/2 right-0 w-1 h-1 bg-sweet-potato-400 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

// Dots Loading
const DotsLoader: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className={cn(
            'bg-sweet-potato-500 rounded-full',
            size === 'w-4 h-4' ? 'w-1 h-1' : size === 'w-8 h-8' ? 'w-2 h-2' : 'w-3 h-3'
          )}
        />
      ))}
    </div>
  )
}

// Wave Loading
const WaveLoader: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className={cn(
            'bg-sweet-potato-500 rounded-sm',
            size === 'w-4 h-4' ? 'w-0.5 h-3' : size === 'w-8 h-8' ? 'w-1 h-6' : 'w-1.5 h-8'
          )}
        />
      ))}
    </div>
  )
}

// Classic Spinner
const ClassicSpinner: React.FC<{ size: string }> = ({ size }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={cn(
        'border-2 border-sweet-potato-200 border-t-sweet-potato-500 rounded-full',
        size
      )}
    />
  )
}

// Text Loader
const TextLoader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center space-x-2">
      <SweetPotatoSpinner size="w-6 h-6" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sweet-potato-600 font-handwritten text-lg"
      >
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ...
        </motion.span>
      </motion.span>
    </div>
  )
}

export const Loading: React.FC<LoadingProps> = ({
  variant = 'sweet-potato',
  size = 'md',
  className,
  text,
  overlay = false
}) => {
  const sizeClass = sizeVariants[size]

  const renderLoader = () => {
    switch (variant) {
      case 'spinner':
        return <ClassicSpinner size={sizeClass} />
      case 'dots':
        return <DotsLoader size={sizeClass} />
      case 'wave':
        return <WaveLoader size={sizeClass} />
      case 'sweet-potato':
        return <SweetPotatoSpinner size={sizeClass} />
      case 'text':
        return <TextLoader text={text || 'Đang tải'} />
      default:
        return <SweetPotatoSpinner size={sizeClass} />
    }
  }

  const content = (
    <div className={cn('flex items-center justify-center', className)}>
      {renderLoader()}
    </div>
  )

  if (overlay) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ivory/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="sweet-potato-card rounded-elegant p-8"
          >
            {content}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return content
}

// Loading Screen Component
export const LoadingScreen: React.FC<{ 
  message?: string
  progress?: number
}> = ({ 
  message = 'Đang chuẩn bị món ngon...', 
  progress 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-chi-lan">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Main logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="text-8xl"
        >
          🍠
        </motion.div>
        
        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <h1 className="font-serif text-4xl font-semibold text-text-primary">
            Sweet Potatou
          </h1>
          <p className="font-handwritten text-xl text-sweet-potato-600">
            by Chi Lan
          </p>
        </motion.div>
        
        {/* Loading animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Loading variant="sweet-potato" size="lg" />
        </motion.div>
        
        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-text-secondary font-medium"
        >
          {message}
        </motion.p>
        
        {/* Progress bar */}
        {typeof progress === 'number' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="w-full max-w-xs mx-auto"
          >
            <div className="h-2 bg-sweet-potato-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-sweet-potato-500 to-sweet-potato-600 rounded-full"
              />
            </div>
            <p className="text-sm text-sweet-potato-600 mt-2 text-center">
              {Math.round(progress)}%
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 