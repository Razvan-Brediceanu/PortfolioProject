'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const images = [
  {
    src: '/3d-internet-secuirty-badge.jpg',
    category: '3D Design',
    title: 'Security Badge Design',
  },
  {
    src: '/3629607_768.jpg',
    category: 'Print',
    title: 'Editorial Design',
  },
  {
    src: '/2150912061.jpg',
    category: 'Digital',
    title: 'Digital Art',
  },
  {
    src: '/3d-internet-secuirty-badge.jpg',
    category: '3D Design',
    title: 'Security Badge',
  },
  {
    src: '/3d-internet-secuirty-badge.jpg',
    category: '3D Design',
    title: 'Badge Design',
  },
  {
    src: '/3d-internet-secuirty-badge.jpg',
    category: '3D Design',
    title: '3D Badge',
  },
]

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(images.length / 3) - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const handleImageClick = (category: string) => {
    router.push(`/portfolio?category=${category}`)
  }

  return (
    <div className='relative overflow-hidden'>
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {Array.from({ length: Math.ceil(images.length / 3) }).map(
          (_, groupIndex) => (
            <div key={groupIndex} className='min-w-full flex-shrink-0 px-4'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {[0, 1, 2].map((offset) => {
                  const imageIndex = groupIndex * 3 + offset
                  if (imageIndex >= images.length) return null
                  return (
                    <div
                      key={offset}
                      className='relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer'
                      onClick={() =>
                        handleImageClick(images[imageIndex].category)
                      }
                    >
                      <Image
                        src={images[imageIndex].src}
                        alt={images[imageIndex].title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end'>
                        <h3 className='text-white text-xl font-semibold'>
                          {images[imageIndex].title}
                        </h3>
                        <p className='text-white/80 mt-2'>
                          {images[imageIndex].category}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        )}
      </div>

      {/* Navigation dots */}
      <div className='flex justify-center gap-2 mt-6'>
        {Array.from({ length: Math.ceil(images.length / 3) }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          )
        )}
      </div>
    </div>
  )
}
