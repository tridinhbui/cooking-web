import HeroSection from '@/components/sections/HeroSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Temporary content sections */}
      <section className="py-24 bg-warm-beige/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-wood-brown mb-8">
            Các chức năng đang được phát triển...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="font-serif text-xl text-wood-brown mb-4">Công thức món ăn</h3>
              <p className="text-ceramic-taupe">Gallery các món ăn với filter và search</p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-serif text-xl text-wood-brown mb-4">Chatbot Củ Khoai Lang</h3>
              <p className="text-ceramic-taupe">AI assistant thân thiện gợi ý món ăn</p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-serif text-xl text-wood-brown mb-4">Dark Mode Sunset</h3>
              <p className="text-ceramic-taupe">Chế độ tối với tone màu hoàng hôn</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 