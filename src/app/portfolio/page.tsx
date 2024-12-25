'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Grid, List } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    image: '/portfolio/3d-internet-secuirty-badge.jpg',
    title: 'Security Badge Design',
    category: '3D Design',
  },
  {
    id: 2,
    image: '/portfolio/3d-internet-secuirty-badge.jpg',
    title: 'Editorial Design',
    category: 'Print',
  },
  // Add more items as needed
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState('grid')

  const filteredItems =
    filter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter)

  return (
    <div className='min-h-screen bg-white pt-20'>
      {/* Header Section */}
      <div className='pb-12 px-4 md:px-8'>
        <div className='max-w-7xl mx-auto space-y-4'>
          <h1 className='text-4xl font-bold text-center'>Portfolio</h1>
          <p className='text-center text-gray-500'>
            Exploring creativity through design, illustration, and digital art.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className='sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center'>
          <div className='flex gap-2 overflow-x-auto pb-2 md:pb-0'>
            <Button
              variant={filter === 'All' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => setFilter('All')}
            >
              All
            </Button>
            <Button
              variant={filter === '3D Design' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => setFilter('3D Design')}
            >
              3D Design
            </Button>
            <Button
              variant={filter === 'Print' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => setFilter('Print')}
            >
              Print
            </Button>
            <Button
              variant={filter === 'Digital' ? 'default' : 'ghost'}
              size='sm'
              onClick={() => setFilter('Digital')}
            >
              Digital
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setView('grid')}
              className={view === 'grid' ? 'bg-gray-100' : ''}
            >
              <Grid className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setView('list')}
              className={view === 'list' ? 'bg-gray-100' : ''}
            >
              <List className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-12'>
        <div
          className={`grid gap-6 ${
            view === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
        >
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className='group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <CardContent className='p-0'>
                <div
                  className={`relative ${
                    view === 'grid' ? 'aspect-[4/3]' : 'aspect-[16/9]'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end'>
                    <h3 className='text-white text-xl font-semibold'>
                      {item.title}
                    </h3>
                    <p className='text-white/80 mt-2'>{item.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
