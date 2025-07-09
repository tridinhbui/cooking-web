import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://sweet-potatou.com'),
  title: {
    default: 'Chi Lan | Sweet Potatou - Food Blog',
    template: '%s | Sweet Potatou'
  },
  description: 'A culinary journey celebrating sweet potatoes through authentic Vietnamese recipes by Chi Lan - 129K Instagram followers. Homemade dishes with love and creativity.',
  authors: [{ name: 'Chi Lan Ng', url: 'https://instagram.com/sweet_potatou' }],
  creator: 'Chi Lan Ng',
  keywords: ['Chi Lan', 'sweet potato', 'Vietnamese cuisine', 'food blog', 'homemade recipes', 'cooking', 'TikTok', 'Instagram', 'healthy eating'],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sweet-potatou.com/',
    title: 'Chi Lan | Sweet Potatou - Food Blog',
    description: 'A culinary journey celebrating sweet potatoes - 129K followers. Homemade dishes filled with love and creativity.',
    siteName: 'Sweet Potatou',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chi Lan - Sweet Potatou Food Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sweet_potatou',
    title: 'Chi Lan | Sweet Potatou - Food Blog',
    description: 'A culinary journey celebrating sweet potatoes - 129K followers',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  other: {
    'theme-color': '#FEFCF8',
    'color-scheme': 'light dark'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FEFCF8" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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