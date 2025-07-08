'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Handwritten } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { 
  HomeIcon, 
  BookOpenIcon, 
  UserIcon, 
  HeartIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon
} from 'lucide-react'

interface NavbarProps {
  className?: string
}

const navItems = [
  { label: 'Trang chủ', href: '/', icon: HomeIcon },
  { label: 'Công thức', href: '/recipes', icon: BookOpenIcon },
  { label: 'Về tôi', href: '/about', icon: UserIcon },
  { label: 'Yêu thích', href: '/bookmarks', icon: HeartIcon },
]

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          'fixed top-4 left-4 right-4 z-50 transition-all duration-500',
          className
        )}
      >
        <motion.div
          animate={{
            scale: isScrolled ? 0.95 : 1,
            y: isScrolled ? -8 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            'glass-card-strong rounded-elegant border border-white/20 transition-all duration-500',
            isScrolled && 'shadow-elegant-hover backdrop-blur-lg'
          )}
          style={{
            background: isScrolled 
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.15) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="text-2xl"
              >
                🍠
              </motion.div>
              <Handwritten 
                size="md" 
                className={cn(
                  'text-wood-brown transition-all duration-300',
                  isScrolled && 'text-lg'
                )}
              >
                Sweet Potatou
              </Handwritten>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-soft text-ceramic-taupe hover:text-wood-brown transition-colors duration-200"
                  >
                    <item.icon size={16} />
                    <span className={cn(
                      'font-medium transition-all duration-300',
                      isScrolled && 'text-sm'
                    )}>
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-3">
              {/* Dark mode toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                {isDarkMode ? (
                  <SunIcon size={18} className="text-sunset-pink" />
                ) : (
                  <MoonIcon size={18} className="text-wood-brown" />
                )}
              </motion.button>

              {/* Search button */}
              <Button 
                variant="ghost" 
                size="sm"
                className={cn(
                  'hidden sm:flex transition-all duration-300',
                  isScrolled && 'px-3 py-1.5 text-sm'
                )}
              >
                Tìm kiếm
              </Button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <XIcon size={18} className="text-wood-brown" />
                ) : (
                  <MenuIcon size={18} className="text-wood-brown" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div 
              className="glass-card-strong rounded-elegant border border-white/20 p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 100%)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
              }}
            >
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 px-4 py-3 rounded-soft text-ceramic-taupe hover:text-wood-brown hover:bg-white/10 transition-all duration-200"
                      >
                        <item.icon size={18} />
                        <span className="font-medium">{item.label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                <div className="border-t border-white/10 pt-3 mt-3">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tìm kiếm công thức
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 