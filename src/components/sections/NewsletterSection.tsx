'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { Heading, Text, Handwritten } from '@/components/ui/Typography'
import { Loading } from '@/components/ui/Loading'

interface NewsletterSectionProps {
  className?: string
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setIsSubscribed(true)
    setEmail('')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  const benefitItems = [
    {
      icon: '🍠',
      title: 'Exclusive Recipes',
      description: 'Get unique sweet potato recipes only available in the newsletter.'
    },
    {
      icon: '💡',
      title: 'Tips & Tricks',
      description: 'Learn cooking secrets, ingredient selection and food preservation from Chi Lan.'
    },
    {
      icon: '❤️',
      title: 'Food Stories',
      description: 'Read interesting stories behind each dish and culinary discovery journey.'
    }
  ]

  return (
    <section 
      ref={ref}
      className={cn('py-20 relative overflow-hidden bg-gradient-chi-lan', className)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 sweet-potato-particles" />
      <div className="absolute top-20 left-10 text-5xl opacity-20">📧</div>
      <div className="absolute bottom-24 right-16 text-4xl opacity-20">🍠</div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <motion.div 
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💌
            </motion.div>
            
            <Handwritten size="xl" className="text-sweet-potato-600 mb-4">
              Don't miss the latest delicious recipes!
            </Handwritten>
            
            <Heading level={1} className="text-text-primary mb-6">
              Sweet Potatou Newsletter
            </Heading>
            
            <Text size="xl" className="text-text-secondary max-w-2xl mx-auto">
              Get unique sweet potato recipes, helpful cooking tips, and interesting 
              food stories from Chi Lan every week.
            </Text>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div 
            variants={itemVariants}
            className="max-w-md mx-auto"
          >
            <Card 
              variant="sweet-potato" 
              className="sweet-potato-card"
            >
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: 3
                      }}
                      className="text-6xl mb-4"
                    >
                      🎉
                    </motion.div>
                    <Heading level={3} className="text-sweet-potato-700 mb-4">
                      Welcome to the Sweet Potatou Family!
                    </Heading>
                    <Text className="text-text-secondary">
                      Thank you for subscribing! Check your email for a special welcome recipe.
                    </Text>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-wood-brown">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="sweetpotato@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        icon="📧"
                        disabled={isLoading}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isLoading}
                      loadingText="Subscribing..."
                      disabled={isLoading}
                      icon={isLoading ? undefined : "📧"}
                      className="btn-sweet-potato"
                    >
                      {isLoading ? (
                        <Loading variant="dots" size="sm" />
                      ) : (
                        "Subscribe to Newsletter"
                      )}
                    </Button>

                    <Text size="sm" className="text-text-secondary text-center">
                      No spam, only delicious content! You can unsubscribe anytime.
                    </Text>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            variants={itemVariants}
            className="mt-16"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefitItems.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3 + index * 0.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <Handwritten size="lg" className="text-sweet-potato-600 mb-2">
                    {benefit.title}
                  </Handwritten>
                  
                  <Text className="text-text-secondary">
                    {benefit.description}
                  </Text>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Text className="text-text-secondary mb-4">
              Over 5,000 food lovers have subscribed to the newsletter
            </Text>
            
            <motion.div 
              className="flex justify-center items-center gap-1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-sweet-potato-500 text-lg cursor-pointer"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                >
                  ⭐
                </motion.span>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-text-secondary mt-2 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              "The best newsletter about sweet potato cuisine!" - Reader
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default NewsletterSection 