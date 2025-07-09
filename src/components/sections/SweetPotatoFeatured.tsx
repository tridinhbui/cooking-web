'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Heading, Text, Handwritten } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { MagicalEffects } from '@/components/effects/MagicalEffects'
import { cn } from '@/lib/utils'

interface SweetPotatoFeaturedProps {
  className?: string
}

const featuredRecipes = [
  {
    id: 1,
    title: "Roasted Sweet Potato with Coconut",
    description: "Crispy outside, creamy inside sweet potato topped with coconut flakes and honey drizzle",
    image: "/images/food/sweet-potato-roasted.jpg",
    cookTime: "35 minutes",
    difficulty: "Easy",
    difficultyColor: "green",
    healthBenefits: ["Rich in Vitamin A", "High Fiber", "Natural Antioxidants"],
    tip: "Choose firm sweet potatoes for best texture",
    magicalType: "sparkles" as const
  },
  {
    id: 2,
    title: "Sweet Potato Coconut Che",
    description: "Traditional Vietnamese dessert with tender sweet potato cubes in creamy coconut milk",
    image: "/images/food/sweet-potato-dessert.jpg",
    cookTime: "25 minutes",
    difficulty: "Medium",
    difficultyColor: "yellow",
    healthBenefits: ["Heart Healthy", "Energy Boost", "Immune Support"],
    tip: "Don't overcook - sweet potato should hold its shape",
    magicalType: "bubbles" as const
  },
  {
    id: 3,
    title: "Crispy Sweet Potato Fries",
    description: "Golden crispy fries with perfect seasoning blend and served with garlic aioli",
    image: "/images/food/sweet-potato-fries.jpg",
    cookTime: "20 minutes",
    difficulty: "Easy",
    difficultyColor: "green",
    healthBenefits: ["Lower Calories", "Good Carbs", "Potassium Rich"],
    tip: "Soak in cold water before frying for extra crispiness",
    magicalType: "floating" as const
  },
  {
    id: 4,
    title: "Sweet Potato Flan",
    description: "Silky smooth dessert combining sweet potato purée with classic caramel flan",
    image: "/images/food/sweet-potato-dessert.jpg",
    cookTime: "60 minutes",
    difficulty: "Advanced",
    difficultyColor: "red",
    healthBenefits: ["Protein Rich", "Vitamin B", "Natural Sweetness"],
    tip: "Steam the sweet potato first for smooth texture",
    magicalType: "aurora" as const
  }
]

export const SweetPotatoFeatured: React.FC<SweetPotatoFeaturedProps> = ({ className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        stiffness: 100,
        damping: 15
      }
    }
  }

  const difficultyColors = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700", 
    red: "bg-red-100 text-red-700"
  }

  return (
    <section 
      ref={ref}
      className={cn(
        'py-24 bg-gradient-to-br from-ivory via-warm-beige to-dusty-pink relative overflow-hidden',
        className
      )}
    >
      {/* Magical Background Effects */}
      <MagicalEffects 
        type="floating" 
        intensity="low" 
        className="absolute inset-0"
      />
      
      {/* Background sweet potato particles */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          >
            🍠
          </motion.div>
        ))}
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto relative"
          >
            {/* Magic sparkles around header */}
            <div className="absolute -inset-10">
              <MagicalEffects 
                type="sparkles" 
                intensity="medium"
              />
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="inline-flex items-center gap-3 mb-6"
                animate={{
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.span 
                  className="text-5xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  🍠
                </motion.span>
                <Heading level={2} className="text-sweet-potato-700">
                  Featured Sweet Potato Recipes
                </Heading>
                <motion.span 
                  className="text-5xl"
                  animate={{
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  🍠
                </motion.span>
              </motion.div>

              <Handwritten size="xl" className="text-sweet-potato-600 mb-4">
                From Chi Lan's Kitchen
              </Handwritten>
              
              <Text size="lg" className="text-text-secondary leading-relaxed">
                Discover my favorite sweet potato creations that have captured hearts and taste buds. 
                Each recipe comes with personal tips and health benefits for your wellness journey.
              </Text>
            </div>
          </motion.div>

          {/* Recipe Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className="h-full overflow-hidden cursor-pointer relative">
                  {/* Magical effects specific to each recipe */}
                  <div className="absolute inset-0 opacity-30">
                    <MagicalEffects 
                      type={recipe.magicalType}
                      intensity="low"
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Recipe Image */}
                    <div className="relative h-48 bg-gradient-to-br from-sweet-potato-300 to-sweet-potato-400 overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Image overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      
                      {/* Floating sparkles on image hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          background: [
                            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Badges */}
                      <div className="absolute top-4 right-4">
                        <motion.span 
                          className={cn(
                            'px-3 py-1 rounded-full text-xs font-semibold',
                            difficultyColors[recipe.difficultyColor as keyof typeof difficultyColors]
                          )}
                          whileHover={{ scale: 1.05 }}
                        >
                          {recipe.difficulty}
                        </motion.span>
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <motion.div 
                          className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-text-primary"
                          whileHover={{ scale: 1.05 }}
                        >
                          ⏱️ {recipe.cookTime}
                        </motion.div>
                      </div>
                    </div>

                    {/* Recipe Content */}
                    <div className="p-6 space-y-4">
                      {/* Title & Description */}
                      <div>
                        <motion.h3 
                          className="text-xl font-serif font-semibold text-text-primary mb-2 group-hover:text-sweet-potato-600 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {recipe.title}
                        </motion.h3>
                        <Text className="text-text-secondary leading-relaxed">
                          {recipe.description}
                        </Text>
                      </div>

                      {/* Health Benefits */}
                      <div>
                        <Text size="sm" className="text-sweet-potato-600 font-semibold mb-2">
                          Health Benefits:
                        </Text>
                        <div className="flex flex-wrap gap-2">
                          {recipe.healthBenefits.map((benefit, i) => (
                            <motion.span
                              key={benefit}
                              className="px-2 py-1 bg-sweet-potato-100 text-sweet-potato-700 rounded-md text-xs"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              {benefit}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Chef's Tip */}
                      <motion.div 
                        className="bg-sweet-potato-50 rounded-lg p-3"
                        whileHover={{ 
                          backgroundColor: "rgba(212, 149, 90, 0.1)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Text size="sm" className="text-sweet-potato-600 font-semibold mb-1">
                          💡 Chi Lan's Tip:
                        </Text>
                        <Text size="sm" className="text-text-secondary italic">
                          {recipe.tip}
                        </Text>
                      </motion.div>

                      {/* Action Button */}
                      <Button 
                        variant="outline" 
                        className="w-full mt-4 group-hover:bg-sweet-potato-100 transition-colors"
                        loading={false}
                      >
                        View Full Recipe
                      </Button>
                    </div>
                  </div>

                  {/* Card hover overlay */}
                  <motion.div 
                    className="absolute inset-0 rounded-elegant bg-gradient-to-br from-soft-gold/5 to-wood-brown/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Sweet Potato Benefits Banner */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0">
              <MagicalEffects 
                type="aurora" 
                intensity="medium"
              />
            </div>
            
            <Card className="p-8 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <motion.div 
                  className="flex items-center justify-center gap-4 mb-6"
                  animate={{
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.span 
                    className="text-4xl"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    🍠
                  </motion.span>
                  <Handwritten size="xl" className="text-sweet-potato-600">
                    Why Sweet Potatoes Are Amazing
                  </Handwritten>
                  <motion.span 
                    className="text-4xl"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                  >
                    🍠
                  </motion.span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {[
                    {
                      title: "Nutritional Powerhouse",
                      description: "Packed with Vitamin A, fiber, and potassium for optimal health",
                      icon: "🌟"
                    },
                    {
                      title: "Natural Sweetness", 
                      description: "Satisfy your sweet cravings with nature's candy",
                      icon: "🍯"
                    },
                    {
                      title: "Versatile Ingredient",
                      description: "Perfect for both sweet and savory dishes, from fries to desserts",
                      icon: "🎨"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="space-y-2"
                      whileHover={{ 
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <motion.div 
                        className="text-3xl mb-2"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <Text className="text-sweet-potato-700 font-semibold">
                        {benefit.title}
                      </Text>
                      <Text size="sm" className="text-text-secondary">
                        {benefit.description}
                      </Text>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center relative"
          >
            <div className="absolute -inset-20">
              <MagicalEffects 
                type="sparkles" 
                intensity="high"
              />
            </div>
            
            <div className="relative z-10">
              <Button 
                variant="primary" 
                size="lg"
                className="btn-sweet-potato group"
                icon="🍠"
              >
                <motion.span
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Discover More Sweet Potato Recipes
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default SweetPotatoFeatured 