'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface ChatbotProps {
  className?: string
  autoOpen?: boolean
}

const predefinedResponses = {
  greeting: [
    "Hi there! I'm Chi Lan's cooking assistant. How can I help you today? 🍠",
    "Hello! Want to know about sweet potato recipes or cooking tips? ✨",
    "Hey! I'm here to help with your cooking questions! 👩‍🍳"
  ],
  sweetPotato: [
    "Sweet potatoes are amazing! They're rich in beta-carotene, fiber, and natural sweetness. What would you like to cook?",
    "I love sweet potatoes too! Try roasting them with a drizzle of honey and cinnamon.",
    "Sweet potatoes are so versatile! Perfect for both sweet and savory dishes."
  ],
  recipes: [
    "Chi Lan has some fantastic recipes! Try the Roasted Sweet Potato with Coconut - it's crispy outside and creamy inside!",
    "The Sweet Potato Coconut Che is a traditional Vietnamese dessert that's absolutely delicious!",
    "For a quick snack, the Crispy Sweet Potato Fries are perfect - golden and seasoned to perfection!"
  ],
  cooking: [
    "Here's a pro tip from Chi Lan: Always choose firm sweet potatoes for the best texture!",
    "Don't overcook sweet potatoes in desserts - they should hold their shape!",
    "For extra crispy fries, soak the sweet potato strips in cold water before cooking!"
  ],
  health: [
    "Sweet potatoes are nutritional powerhouses! They're packed with Vitamin A, fiber, and potassium.",
    "They're great for your immune system and provide natural energy throughout the day!",
    "Sweet potatoes contain antioxidants that help protect your cells and support overall health."
  ]
}

const getRandomResponse = (category: keyof typeof predefinedResponses): string => {
  const responses = predefinedResponses[category]
  return responses[Math.floor(Math.random() * responses.length)]
}

const processMessage = (message: string): string => {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return getRandomResponse('greeting')
  }
  
  if (lowerMessage.includes('sweet potato') || lowerMessage.includes('khoai ngọt')) {
    return getRandomResponse('sweetPotato')
  }
  
  if (lowerMessage.includes('recipe') || lowerMessage.includes('cook') || lowerMessage.includes('dish')) {
    return getRandomResponse('recipes')
  }
  
  if (lowerMessage.includes('tip') || lowerMessage.includes('how to') || lowerMessage.includes('help')) {
    return getRandomResponse('cooking')
  }
  
  if (lowerMessage.includes('health') || lowerMessage.includes('nutrition') || lowerMessage.includes('benefit')) {
    return getRandomResponse('health')
  }
  
  return "That's interesting! Tell me more about what you'd like to cook with sweet potatoes, or ask me about Chi Lan's recipes! 🍠✨"
}

export const Chatbot: React.FC<ChatbotProps> = ({ className, autoOpen = true }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-open chatbot when component mounts if autoOpen is true
  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Add welcome message
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          text: "👋 Welcome to Sweet Potatou! I'm Chi Lan's cooking assistant. Ask me anything about sweet potato recipes!",
          isBot: true,
          timestamp: new Date()
        }
        setMessages([welcomeMessage])
      }, 2000) // Open after 2 seconds

      return () => clearTimeout(timer)
    }
  }, [autoOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = processMessage(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className={cn('fixed bottom-6 right-6 z-50', className)}>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-sweet-potato-500 to-sweet-potato-600 text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 10px 30px rgba(212, 149, 90, 0.3)",
            "0 15px 40px rgba(212, 149, 90, 0.5)",
            "0 10px 30px rgba(212, 149, 90, 0.3)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Magic sparkles around button */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)",
              "conic-gradient(from 360deg, transparent, rgba(255,255,255,0.3), transparent)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.span
          className="text-2xl relative z-10"
          animate={{
            scale: isOpen ? [1, 0.8, 1] : [1, 1.1, 1],
            rotate: isOpen ? [0, 180, 360] : [0, 10, -10, 0]
          }}
          transition={{
            duration: isOpen ? 0.5 : 2,
            repeat: isOpen ? 0 : Infinity,
            ease: "easeInOut"
          }}
        >
          {isOpen ? '✕' : '💬'}
        </motion.span>
        
        {/* Floating particles around button */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            animate={{
              x: [0, Math.sin(i * 2) * 20, 0],
              y: [0, Math.cos(i * 2) * 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut"
            }}
            style={{
              left: '50%',
              top: '50%'
            }}
          />
        ))}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 h-96 glass-card-strong rounded-elegant shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 149, 90, 0.3)'
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sweet-potato-500 to-sweet-potato-600 text-white p-4 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)",
                    "linear-gradient(225deg, transparent, rgba(255,255,255,0.3), transparent)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative z-10 flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-2xl"
                >
                  🍠
                </motion.div>
                <div>
                  <h3 className="font-semibold">Chi Lan's Assistant</h3>
                  <p className="text-xs opacity-90">Sweet Potato Expert</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={cn(
                    'flex',
                    message.isBot ? 'justify-start' : 'justify-end'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-xs px-3 py-2 rounded-2xl text-sm relative overflow-hidden',
                      message.isBot
                        ? 'bg-sweet-potato-100 text-sweet-potato-800 rounded-tl-sm'
                        : 'bg-sweet-potato-500 text-white rounded-tr-sm'
                    )}
                  >
                    {message.isBot && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    )}
                    <p className="relative z-10">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-sweet-potato-100 text-sweet-potato-800 px-3 py-2 rounded-2xl rounded-tl-sm">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-sweet-potato-500 rounded-full"
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-sweet-potato-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about sweet potato recipes..."
                  className="flex-1 px-3 py-2 border border-sweet-potato-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sweet-potato-400 text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-sweet-potato-500 text-white rounded-xl hover:bg-sweet-potato-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span className="text-sm">✨</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatbot 