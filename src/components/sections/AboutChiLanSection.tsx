'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Heading, Text, Handwritten } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface AboutChiLanSectionProps {
  className?: string
}

const journeyMilestones = [
  {
    year: "2020",
    title: "College Kitchen Dreams", 
    description: "Started cooking in my tiny college dorm, experimenting with sweet potato recipes as affordable, healthy meals",
    highlight: "First viral TikTok video with sweet potato fries"
  },
  {
    year: "2021",
    title: "Sweet Potato Obsession",
    description: "Discovered the versatility of sweet potatoes and began sharing recipes with friends and social media",
    highlight: "Reached 10K followers with sweet potato che recipe"
  },
  {
    year: "2022", 
    title: "Food Blogger Birth",
    description: "Launched @sweet_potatou account, focusing on authentic Vietnamese sweet potato dishes with modern twists",
    highlight: "50K followers milestone achieved"
  },
  {
    year: "2023",
    title: "Digital Food Influencer",
    description: "Partnered with local restaurants and food brands, creating content that celebrates Vietnamese cuisine",
    highlight: "100K+ followers and first brand collaboration"
  },
  {
    year: "2024",
    title: "Sweet Potatou Brand",
    description: "Established personal food blog and brand, focusing on healthy, accessible cooking for everyone",
    highlight: "129K followers and growing community"
  }
]

const coreValues = [
  {
    title: "Natural & Healthy",
    description: "Embracing wholesome ingredients that nourish both body and soul",
    color: "from-green-400 to-green-600"
  },
  {
    title: "Love & Sharing", 
    description: "Every recipe is made with love and shared with joy",
    color: "from-pink-400 to-rose-600"
  },
  {
    title: "Creative & Simple",
    description: "Making gourmet dishes accessible with creative, simple techniques",
    color: "from-sweet-potato-400 to-sweet-potato-600"
  }
]

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

export const AboutChiLanSection: React.FC<AboutChiLanSectionProps> = ({ className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section 
      ref={ref}
      className={cn(
        'py-24 bg-gradient-to-br from-warm-beige via-dusty-pink to-ceramic-taupe relative overflow-hidden',
        className
      )}
    >
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.span 
                className="text-5xl"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                👩‍🍳
              </motion.span>
              <Heading level={2} className="text-text-primary">
                About Chi Lan
              </Heading>
              <motion.span 
                className="text-5xl"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                🍠
              </motion.span>
            </motion.div>

            <Handwritten size="xl" className="text-sweet-potato-600 mb-6">
              From Dorm Kitchen to Digital Fame
            </Handwritten>
            
            <Text size="lg" className="text-text-secondary leading-relaxed">
              Hi there! I'm Chi Lan, the sweet potato enthusiast behind @sweet_potatou. 
              What started as simple college cooking experiments has grown into a community 
              of 129K+ food lovers who share my passion for healthy, delicious Vietnamese cuisine.
            </Text>
          </motion.div>

          {/* Personal Profile Card */}
          <motion.div 
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <Card variant="glass" className="p-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Profile Image Placeholder */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-sweet-potato-300 to-sweet-potato-500 flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 sweet-potato-pattern opacity-20" />
                    
                    {/* Profile Placeholder */}
                    <motion.div 
                      className="text-8xl"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      👩‍🍳
                    </motion.div>
                    
                    {/* Floating Sparkles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-2xl"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${10 + Math.random() * 80}%`
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Profile Information */}
                <div className="space-y-6">
                  <div>
                    <Heading level={3} className="text-text-primary mb-2">
                      Chi Lan Ng
                    </Heading>
                    <Text className="text-sweet-potato-600 font-semibold mb-4">
                      Food Content Creator & Sweet Potato Specialist
                    </Text>
                    
                    {/* Social Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <motion.div 
                        className="text-center p-3 bg-sweet-potato-50 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Text className="text-2xl font-bold text-sweet-potato-600">129K</Text>
                        <Text size="sm" className="text-text-secondary">Instagram Followers</Text>
                      </motion.div>
                      <motion.div 
                        className="text-center p-3 bg-sweet-potato-50 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Text className="text-2xl font-bold text-sweet-potato-600">123</Text>
                        <Text size="sm" className="text-text-secondary">Posts Created</Text>
                      </motion.div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📧</span>
                        <Text className="text-text-secondary">chilan@cuagency.co</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📱</span>
                        <Text className="text-text-secondary">@sweet_potatou</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🎬</span>
                        <Text className="text-text-secondary">TikTok Creator</Text>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="primary" 
                      size="sm"
                      className="bg-sweet-potato-500 hover:bg-sweet-potato-600"
                      icon={<span className="mr-2">📷</span>}
                    >
                      Follow on Instagram
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm" 
                      className="border-sweet-potato-300 text-sweet-potato-700 hover:bg-sweet-potato-50"
                      icon={<span className="mr-2">📧</span>}
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <Card variant="elegant" className="p-8">
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <Handwritten size="lg" className="text-sweet-potato-600 mb-4">
                  My Food Philosophy
                </Handwritten>
                <blockquote className="text-xl italic text-text-primary leading-relaxed">
                  "Food is not just about taste – it's about bringing people together, 
                  creating memories, and nourishing both body and soul. Every sweet potato 
                  recipe I share carries love, tradition, and a sprinkle of creativity."
                </blockquote>
                <Text className="text-text-secondary mt-4 font-semibold">
                  - Chi Lan Ng
                </Text>
              </motion.div>
            </Card>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="text-center"
            >
              <Handwritten size="xl" className="text-sweet-potato-600 mb-4">
                Sweet Potatou Values
              </Handwritten>
              <Text className="text-text-secondary max-w-2xl mx-auto">
                These core principles guide everything I create and share with our amazing community.
              </Text>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <Card variant="glass" className="p-6 text-center h-full">
                    <motion.div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mx-auto mb-4 flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl text-white">
                        {index === 0 ? '🌿' : index === 1 ? '💝' : '✨'}
                      </span>
                    </motion.div>
                    
                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                      {value.title}
                    </h4>
                    <Text size="sm" className="text-text-secondary leading-relaxed">
                      {value.description}
                    </Text>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="text-center"
            >
              <Handwritten size="xl" className="text-sweet-potato-600 mb-4">
                My Sweet Potato Journey
              </Handwritten>
              <Text className="text-text-secondary max-w-2xl mx-auto">
                From college dorm experiments to a thriving food community – here's how it all began.
              </Text>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {journeyMilestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card variant="glass" className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Year Badge */}
                        <motion.div 
                          className="flex-shrink-0"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, 5, -5, 0]
                          }}
                        >
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sweet-potato-400 to-sweet-potato-600 flex items-center justify-center text-white font-bold text-lg">
                            {milestone.year}
                          </div>
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <h4 className="text-xl font-semibold text-text-primary">
                            {milestone.title}
                          </h4>
                          <Text className="text-text-secondary leading-relaxed">
                            {milestone.description}
                          </Text>
                          <div className="bg-sweet-potato-50 rounded-lg p-3">
                            <Text size="sm" className="text-sweet-potato-700 font-semibold">
                              🎉 Highlight: {milestone.highlight}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <Card variant="elegant" className="p-8">
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <Handwritten size="lg" className="text-sweet-potato-600 mb-4">
                  Join the Sweet Potatou Family
                </Handwritten>
                <Text className="text-text-secondary leading-relaxed mb-6">
                  Ready to embark on your own sweet potato culinary adventure? 
                  Join our growing community and discover the joy of healthy, delicious cooking!
                </Text>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-sweet-potato"
                    icon={<span className="mr-2">🍠</span>}
                  >
                    Start Cooking with Us
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-sweet-potato-300 text-sweet-potato-700 hover:bg-sweet-potato-50"
                    icon={<span className="mr-2">📱</span>}
                  >
                    Follow on Social
                  </Button>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutChiLanSection 