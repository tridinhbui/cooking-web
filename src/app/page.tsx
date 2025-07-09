import HeroSection from '@/components/sections/HeroSection'
import SocialMediaSection from '@/components/sections/SocialMediaSection'
import SweetPotatoFeatured from '@/components/sections/SweetPotatoFeatured'
import AboutChiLanSection from '@/components/sections/AboutChiLanSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import Footer from '@/components/layout/Footer'
import Chatbot from '@/components/ui/Chatbot'
import { MagicCursorTrail } from '@/components/effects/MagicalEffects'

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Magic Cursor Trail Effect */}
      <MagicCursorTrail />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Sweet Potato Recipes */}
      <SweetPotatoFeatured />
      
      {/* About Chi Lan Section */}
      <AboutChiLanSection />
      
      {/* Social Media Section */}
      <SocialMediaSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Chatbot */}
      <Chatbot />
    </main>
  )
} 