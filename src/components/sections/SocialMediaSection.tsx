'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Heading, Text, Handwritten } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

interface SocialMediaSectionProps {
  className?: string
}

const socialPlatforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@sweet_potatou',
    url: 'https://instagram.com/sweet_potatou',
    stats: {
      posts: 123,
      followers: '129K',
      following: 145
    },
    description: 'Food photography and recipe sharing',
    gradient: 'from-purple-500 via-pink-500 to-yellow-500',
    icon: '📷'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@sweet_potatou',
    url: 'https://tiktok.com/@sweet_potatou',
    stats: {
      posts: 85,
      followers: '50K+',
      likes: '500K+'
    },
    description: 'Sweet potato cooking videos & tutorials',
    gradient: 'from-black via-gray-800 to-black',
    icon: '🎬'
  }
]

const communityHashtags = [
  '#SweetPotatouRecipes',
  '#ChiLanCooking',
  '#HealthyEating',
  '#VietnameseCuisine',
  '#HomeCooking'
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

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section 
      ref={ref}
      className={cn('py-20 relative overflow-hidden', className)}
    >
      {/* Background effects */}
      <div className="absolute inset-0 sweet-potato-particles" />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <Handwritten size="lg" className="text-sweet-potato-600 mb-4">
              Connect with Chi Lan
            </Handwritten>
            
            <Heading level={2} className="mb-6 text-chi-lan">
              Sweet Potatou Community
            </Heading>
            
            <Text size="lg" className="text-readable-secondary max-w-2xl mx-auto">
              Join our growing food community! Follow for the latest recipes, 
              cooking tips, and share your own sweet potato creations.
            </Text>
          </motion.div>

          {/* Social platforms */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  variant="elegant" 
                  className="relative overflow-hidden h-full group"
                >
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center text-2xl text-white mr-4 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {platform.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-readable">
                        {platform.name}
                      </h3>
                      <Text className="text-readable-secondary font-medium">
                        {platform.handle}
                      </Text>
                    </div>
                  </div>

                  {/* Platform stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sweet-potato-600">
                        {platform.stats.posts}
                      </div>
                      <Text size="sm" className="text-readable-secondary">posts</Text>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sweet-potato-600">
                        {platform.stats.followers}
                      </div>
                      <Text size="sm" className="text-readable-secondary">followers</Text>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sweet-potato-600">
                        {platform.stats.following || platform.stats.likes}
                      </div>
                      <Text size="sm" className="text-readable-secondary">
                        {platform.stats.following ? 'following' : 'likes'}
                      </Text>
                    </div>
                  </div>

                  <Text className="text-readable-secondary mb-6 italic">
                    "{platform.description}"
                  </Text>

                  {/* Follow button */}
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-elegant bg-gradient-to-r ${platform.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-2">{platform.icon}</span>
                    Follow on {platform.name}
                  </motion.a>

                  {/* Floating decoration */}
                  <motion.div 
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 3 + index * 0.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 text-2xl opacity-20"
                  >
                    🍠
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Community engagement */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card variant="sweet-potato" className="sweet-potato-card rounded-elegant p-8 max-w-2xl mx-auto">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl mb-4"
              >
                🤝
              </motion.div>

              <Handwritten size="lg" className="text-sweet-potato-600 mb-4">
                Tag @sweet_potatou
              </Handwritten>
              
              <Text className="text-readable-secondary mb-6">
                When you try Chi Lan's recipes! We love seeing your creations 
                and sharing them with our sweet potato community.
              </Text>

              {/* Community hashtags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {communityHashtags.map((hashtag, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-sweet-potato-100 text-sweet-potato-700 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {hashtag}
                  </motion.span>
                ))}
              </div>

              <div className="flex justify-center items-center gap-2">
                <motion.span 
                  className="text-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🍠
                </motion.span>
                <Text className="text-sweet-potato-600 font-semibold">
                  #SweetPotatouRecipes #ChiLanCooking
                </Text>
                <motion.span 
                  className="text-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🍠
                </motion.span>
              </div>
            </Card>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Text size="sm" className="text-readable-secondary mb-4">
              Followed by _nclan, sw.potatou + 15 more
            </Text>
            <div className="flex justify-center items-center gap-2">
              {['👩‍🍳', '🥘', '📸', '❤️', '🌱'].map((emoji, index) => (
                <motion.span
                  key={index}
                  className="text-xl opacity-60"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default SocialMediaSection 