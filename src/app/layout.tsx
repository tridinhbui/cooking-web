import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Sweet Potatou - Food Blog',
  description: 'Những món ăn homemade giản dị, ấm áp, chan chứa cảm xúc từ @sweet_potatou',
  keywords: ['food blog', 'homemade', 'recipes', 'cooking', 'sweet potatou'],
  authors: [{ name: 'Sweet Potatou' }],
  openGraph: {
    title: 'Sweet Potatou - Food Blog',
    description: 'Những món ăn homemade giản dị, ấm áp, chan chứa cảm xúc',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweet Potatou - Food Blog',
    description: 'Những món ăn homemade giản dị, ấm áp, chan chứa cảm xúc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FEFCF8" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="antialiased selection:bg-dusty-pink selection:text-wood-brown">
        <div className="min-h-screen bg-gradient-elegant transition-all duration-500">
          <Navbar />
          <div className="floating-particles">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 