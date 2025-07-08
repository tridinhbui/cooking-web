'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Heading, Handwritten, Text } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { GlassPanel } from '@/components/effects/GlassPanel'
import { FloatingIngredients, SparkleField } from '@/components/effects/FloatingElement'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x: x * 20, y: y * 20 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background layers with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-elegant" />
        
        {/* Floating particles background */}
        <div className="absolute inset-0 floating-particles" />
        
        {/* Sparkle field */}
        <SparkleField density="medium" />
        
        {/* Floating ingredients */}
        <FloatingIngredients count={12} />
      </motion.div>

      {/* Hero image with parallax */}
      <motion.div 
        style={{ 
          y: imageY,
          x: mousePosition.x * 0.5,
          rotateX: mousePosition.y * 0.1,
          rotateY: mousePosition.x * 0.1
        }}
        className="absolute inset-0 z-10"
      >
        {/* Hero dish image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px]">
          <div className="relative w-full h-full">
            {/* Plate shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-wood-brown/10 rounded-full blur-xl" />
            
            {/* Main dish image placeholder */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-warm-beige to-dusty-pink shadow-elegant">
              <div className="absolute inset-8 rounded-full bg-ivory shadow-inner flex items-center justify-center">
                <span className="text-6xl md:text-8xl">🍽️</span>
              </div>
            </div>
            
            {/* Steam effect */}
            <div className="absolute top-1/4 left-1/2 w-2 h-20 bg-gradient-to-t from-white/30 to-transparent animate-steam" />
            <div className="absolute top-1/4 left-1/2 w-1 h-16 bg-gradient-to-t from-white/20 to-transparent animate-steam delay-500" style={{ marginLeft: '8px' }} />
            <div className="absolute top-1/4 left-1/2 w-1.5 h-18 bg-gradient-to-t from-white/25 to-transparent animate-steam delay-1000" style={{ marginLeft: '-8px' }} />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <Container className="relative z-20">
        <motion.div 
          style={{ 
            y: textY,
            x: mousePosition.x * 0.2,
          }}
          className="text-center space-y-8"
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Heading level={1} className="mb-4">
              Sweet Potatou
            </Heading>
            
            {/* Handwritten tagline */}
            <Handwritten 
              size="lg" 
              className="text-wood-brown/80 mb-8"
            >
              Những món ăn homemade giản dị, ấm áp, chan chứa cảm xúc
            </Handwritten>
          </motion.div>

          {/* Description in glass panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <GlassPanel 
              borderGradient
              className="text-center"
            >
              <Text size="lg" className="text-ceramic-taupe leading-relaxed">
                Khám phá hành trình ẩm thực từ căn bếp nhỏ đến trái tim bạn. 
                Mỗi công thức là một câu chuyện, mỗi món ăn là một kỷ niệm đẹp.
              </Text>
            </GlassPanel>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              withGlow
              className="text-lg px-8 py-4"
            >
              Khám phá công thức
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Câu chuyện của Lan
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="flex flex-col items-center text-ceramic-taupe"
            >
              <span className="text-sm font-handwritten mb-2">Cuộn xuống</span>
              <svg 
                className="w-6 h-6 animate-bounce" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HeroSection 