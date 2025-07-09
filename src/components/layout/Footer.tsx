'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/layout/Container'
import { Heading, Text, Handwritten } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
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

  const linkVariants = {
    hidden: { 
      opacity: 0, 
      x: -10
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  }

  const socialVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#recipes', label: 'Recipes' },
    { href: '#about', label: 'About Chi Lan' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ]

  const recipeCategories = [
    { href: '#main-dishes', label: 'Main Dishes' },
    { href: '#desserts', label: 'Desserts' },
    { href: '#drinks', label: 'Beverages' },
    { href: '#snacks', label: 'Snacks' },
    { href: '#sweet-potato', label: 'Sweet Potato Specials' }
  ]

  const socialLinks = [
    {
      href: 'https://instagram.com/sweet_potatou',
      icon: '📷',
      name: 'Instagram',
      followers: '129K',
      gradient: 'from-purple-500 via-pink-500 to-yellow-500'
    },
    {
      href: 'https://tiktok.com/@sweet_potatou',
      icon: '🎬',
      name: 'TikTok',
      followers: '50K+',
      gradient: 'from-black to-gray-800'
    },
    {
      href: 'mailto:chilan@cuagency.co',
      icon: '📧',
      name: 'Email',
      followers: 'Contact',
      gradient: 'from-red-500 to-red-600'
    }
  ]

  return (
    <footer 
      ref={ref}
      className={`relative overflow-hidden bg-gradient-sunset text-ivory ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 sweet-potato-particles" />
      </div>
      <div className="absolute top-10 left-10 text-4xl opacity-20">🍠</div>
      <div className="absolute bottom-20 right-16 text-3xl opacity-20">✨</div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🍠</span>
                <div>
                  <Heading level={3} className="text-ivory">
                    Sweet Potatou
                  </Heading>
                  <Handwritten size="lg" className="text-warm-beige">
                    by Chi Lan
                  </Handwritten>
                </div>
              </div>
              
              <Text className="text-warm-beige leading-relaxed mb-6 max-w-md">
                A culinary journey celebrating sweet potatoes from the heart. 
                Sharing delicious recipes, warm stories, and love for homemade cuisine.
              </Text>
              
              <div className="flex items-center gap-2 text-warm-beige">
                <span className="text-xl">📍</span>
                <Text size="sm" className="text-ceramic-taupe">
                  Ho Chi Minh City, Vietnam
                </Text>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <Heading level={4} className="text-ivory mb-6">
                Explore
              </Heading>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    variants={linkVariants}
                  >
                    <a
                      href={link.href}
                      className="text-warm-beige hover:text-ivory transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-sm">→</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Recipe Categories */}
            <motion.div variants={itemVariants}>
              <Heading level={4} className="text-ivory mb-6">
                Recipe Categories
              </Heading>
              <ul className="space-y-3">
                {recipeCategories.map((category, index) => (
                  <motion.li
                    key={category.href}
                    variants={linkVariants}
                  >
                    <a
                      href={category.href}
                      className="text-warm-beige hover:text-ivory transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-sm">🍽️</span>
                      {category.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div
            variants={itemVariants}
            className="border-t border-warm-beige/20 pt-12 mb-12"
          >
            <div className="text-center mb-8">
              <Handwritten size="xl" className="text-warm-beige mb-4">
                Connect with Chi Lan
              </Handwritten>
              <Text className="text-warm-beige max-w-2xl mx-auto">
                Follow the culinary journey, see the latest delicious dishes, 
                and share your own stories!
              </Text>
            </div>

            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="group"
                  variants={socialVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                    <span className="relative z-10">{social.icon}</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="text-center mt-3">
                    <Text size="sm" className="text-ivory font-semibold">
                      {social.name}
                    </Text>
                    <Text size="xs" className="text-warm-beige">
                      {social.followers}
                    </Text>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            variants={itemVariants}
            className="border-t border-warm-beige/20 pt-12 mb-12"
          >
            <div className="sweet-potato-card rounded-elegant p-8 text-center max-w-2xl mx-auto">
              <div className="text-4xl mb-4">💌</div>
              <Handwritten size="xl" className="text-sweet-potato-600 mb-4">
                Don't miss the latest delicious recipes!
              </Handwritten>
              <Text className="text-readable-secondary mb-6">
                Subscribe to the newsletter to receive Chi Lan's latest recipes every week.
              </Text>
              <Button 
                variant="primary"
                className="btn-sweet-potato"
                icon="📧"
              >
                Subscribe Now
              </Button>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-warm-beige/20 pt-8 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Text size="sm" className="text-warm-beige">
                © {new Date().getFullYear()} Sweet Potatou by Chi Lan Ng. 
                Made with ❤️ and lots of sweet potatoes.
              </Text>
              
              <div className="flex items-center gap-4 text-sm text-warm-beige">
                <a href="#privacy" className="hover:text-ivory transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#terms" className="hover:text-ivory transition-colors">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="#sitemap" className="hover:text-ivory transition-colors">
                  Sitemap
                </a>
              </div>
            </div>

            <motion.div 
              className="mt-6 flex justify-center items-center gap-2"
              animate={{ 
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">🍠</span>
              <Handwritten size="lg" className="text-warm-beige">
                Cooked with love, served with passion
              </Handwritten>
              <span className="text-2xl">🍠</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  )
}

export default Footer 