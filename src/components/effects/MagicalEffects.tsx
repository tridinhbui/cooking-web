'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface MagicalEffectsProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  type?: 'sparkles' | 'floating' | 'aurora' | 'bubbles'
}

// Sparkle Effect Component
const SparkleEffect: React.FC<{ intensity: number }> = ({ intensity }) => {
  const sparkleCount = intensity === 1 ? 15 : intensity === 2 ? 25 : 40

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(sparkleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-yellow-300 via-yellow-100 to-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Floating Elements Effect
const FloatingEffect: React.FC<{ intensity: number }> = ({ intensity }) => {
  const floatingCount = intensity === 1 ? 8 : intensity === 2 ? 12 : 20
  const elements = ['🍠', '✨', '🌟', '💫', '⭐']

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(floatingCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          {elements[Math.floor(Math.random() * elements.length)]}
        </motion.div>
      ))}
    </div>
  )
}

// Aurora Effect Component
const AuroraEffect: React.FC<{ intensity: number }> = ({ intensity }) => {
  const auroraCount = intensity === 1 ? 2 : intensity === 2 ? 3 : 5

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(auroraCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${45 + i * 30}deg, 
              rgba(212, 149, 90, 0.1), 
              rgba(255, 223, 186, 0.15), 
              rgba(232, 213, 213, 0.1), 
              transparent)`
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
        />
      ))}
    </div>
  )
}

// Bubble Effect Component
const BubbleEffect: React.FC<{ intensity: number }> = ({ intensity }) => {
  const bubbleCount = intensity === 1 ? 10 : intensity === 2 ? 15 : 25

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(bubbleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-white/30 via-sweet-potato-200/40 to-transparent border border-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
          }}
          animate={{
            y: [0, -100 - Math.random() * 200],
            x: [0, Math.sin(i) * 30],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

// Morphing Shapes Effect
const MorphingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 25}%`,
            width: '60px',
            height: '60px',
          }}
          animate={{
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          className="bg-gradient-to-br from-sweet-potato-300/20 via-yellow-200/30 to-orange-300/20 blur-sm"
        />
      ))}
    </div>
  )
}

export const MagicalEffects: React.FC<MagicalEffectsProps> = ({
  className = '',
  intensity = 'medium',
  type = 'sparkles'
}) => {
  const intensityLevel = intensity === 'low' ? 1 : intensity === 'medium' ? 2 : 3

  const renderEffect = () => {
    switch (type) {
      case 'sparkles':
        return <SparkleEffect intensity={intensityLevel} />
      case 'floating':
        return <FloatingEffect intensity={intensityLevel} />
      case 'aurora':
        return <AuroraEffect intensity={intensityLevel} />
      case 'bubbles':
        return <BubbleEffect intensity={intensityLevel} />
      default:
        return <SparkleEffect intensity={intensityLevel} />
    }
  }

  return (
    <div className={`relative ${className}`}>
      {renderEffect()}
      <MorphingShapes />
    </div>
  )
}

// Magic Cursor Trail Effect
export const MagicCursorTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-sweet-potato-400 to-yellow-300 rounded-full"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: [1, 0],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default MagicalEffects 