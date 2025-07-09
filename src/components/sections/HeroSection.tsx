'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Heading, Text, Handwritten } from '@/components/ui/Typography'
import { FloatingElement } from '@/components/effects/FloatingElement'
import { MagicalEffects } from '@/components/effects/MagicalEffects'

interface HeroSectionProps {
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { scrollY } = useScroll()
  const mousePosition = useMousePosition()
  const [mounted, setMounted] = useState(false)

  // Advanced parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%'])
  const contentY = useTransform(scrollY, [0, 800], ['0%', '20%'])
  const parallaxY = useTransform(scrollY, [0, 500], ['0%', '15%'])
  
  // Mouse-based parallax
  const mouseParallaxX = useSpring(
    useTransform(() => (mousePosition.x - 0.5) * 20),
    { stiffness: 200, damping: 50 }
  )
  const mouseParallaxY = useSpring(
    useTransform(() => (mousePosition.y - 0.5) * 20),
    { stiffness: 200, damping: 50 }
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 1.5
      }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  // Magical floating elements data
  const floatingElements = [
    { emoji: '🍠', size: 'text-4xl', delay: 0 },
    { emoji: '✨', size: 'text-2xl', delay: 0.5 },
    { emoji: '🌟', size: 'text-3xl', delay: 1 },
    { emoji: '💫', size: 'text-2xl', delay: 1.5 },
    { emoji: '⭐', size: 'text-xl', delay: 2 }
  ]

  return (
    <section className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-ivory via-warm-beige to-dusty-pink ${className}`}>
      {/* Magical Background Effects */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <MagicalEffects 
          type="aurora" 
          intensity="medium" 
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sweet-potato-100/20 via-transparent to-dusty-pink/30" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-warm-beige/10 to-transparent" />
      </motion.div>

      {/* Floating Magical Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <MagicalEffects 
          type="floating" 
          intensity="high"
        />
        
        {/* Advanced floating ingredients */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mouseParallaxX,
              y: mouseParallaxY,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <span className={`${floatingElements[i % floatingElements.length]?.size || 'text-3xl'} opacity-70`}>
              {floatingElements[i % floatingElements.length]?.emoji || '🍠'}
            </span>
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          className="min-h-screen flex items-center justify-center text-center"
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Magical Sweet Potato with Sparkles */}
            <motion.div
              className="relative inline-block"
              variants={sparkleVariants}
              style={{ x: mouseParallaxX, y: mouseParallaxY }}
            >
              {/* Main Sweet Potato */}
              <motion.div 
                className="text-8xl mb-6 relative z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🍠
              </motion.div>

              {/* Orbiting Sparkles */}
              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2
                const radius = 60
                return (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2
                    }}
                  >
                    ✨
                  </motion.div>
                )
              })}

              {/* Pulsing Aura */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 149, 90, 0.3) 0%, transparent 70%)',
                  filter: 'blur(20px)'
                }}
                animate={{
                  scale: [0.8, 1.5, 0.8],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Hero Text Content */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <Handwritten size="xl" className="text-sweet-potato-600">
                Welcome to
              </Handwritten>
              
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: 'linear-gradient(90deg, #3E2723, #D4955A, #6B4E37, #D4955A, #3E2723)',
                  backgroundSize: '200% 100%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                <Heading level={1} className="leading-tight">
                  Sweet Potatou
                </Heading>
              </motion.div>
              
              <Handwritten size="lg" className="text-sweet-potato-500">
                by Chi Lan Ng
              </Handwritten>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <Text size="lg" className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                A culinary journey celebrating the humble sweet potato through authentic Vietnamese recipes, 
                creative cooking, and heartfelt food stories.
              </Text>
            </motion.div>

            {/* Stats with Magical Numbers */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 py-6"
              variants={itemVariants}
            >
              {[
                { number: '129K', label: 'Instagram Followers' },
                { number: '123', label: 'Recipe Posts' },
                { number: '50K+', label: 'TikTok Views' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center relative"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Magical glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-sweet-potato-300/20 blur-lg"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-sweet-potato-600"
                      animate={{
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <Text size="sm" className="text-text-secondary">
                      {stat.label}
                    </Text>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with Magic Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Button magic aura */}
                <motion.div
                  className="absolute inset-0 rounded-elegant bg-gradient-to-r from-sweet-potato-400/30 to-yellow-400/30 blur-xl"
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
                
                <Button 
                  variant="primary" 
                  size="lg"
                  className="btn-sweet-potato relative z-10"
                  icon="🍠"
                >
                  Explore Recipes
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-sweet-potato-300 text-sweet-potato-700 hover:bg-sweet-potato-50"
                  icon="📷"
                >
                  Follow on Instagram
                </Button>
              </motion.div>
            </motion.div>

            {/* Navigation Links with Underline Magic */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 pt-8 text-sm"
              variants={itemVariants}
            >
              {[
                { href: '#about', label: 'About Chi Lan' },
                { href: '#recipes', label: 'Latest Recipes' },
                { href: '#tips', label: 'Cooking Tips' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-sweet-potato-600 transition-colors duration-300 relative group"
                  variants={linkVariants}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-sweet-potato-600 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ 
                      width: '100%',
                      boxShadow: '0 0 8px rgba(212, 149, 90, 0.6)'
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator with Magic */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={linkVariants}
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <Text size="sm" className="text-ceramic-taupe">
              Scroll to explore
            </Text>
            <motion.div 
              className="w-1 h-8 bg-sweet-potato-400 rounded-full relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 5px rgba(212, 149, 90, 0.5)',
                  '0 0 20px rgba(212, 149, 90, 0.8)',
                  '0 0 5px rgba(212, 149, 90, 0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-transparent"
                animate={{
                  y: ['-100%', '100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dusty-pink via-dusty-pink/50 to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection 