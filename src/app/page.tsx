import Hero from '@/components/ui/Hero'
import PortfolioSlider from '@/components/ui/PortfolioSlider'

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Hero />

      {/* Portfolio Preview Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 max-w-6xl'>
          <h2 className='text-4xl font-bold text-center mb-4'>
            Portfolio preview
          </h2>
          <p className='text-center text-gray-600 mb-12'>
            A brief selection of some of my recent projects.
          </p>

          <PortfolioSlider />
        </div>
      </section>
    </div>
  )
}
