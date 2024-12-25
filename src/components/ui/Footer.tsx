'use client'

import Link from 'next/link'
import { Instagram, CircleUserRound, Pin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-black text-white relative'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Brand Column */}
          <div className='space-y-6'>
            <Link
              href='/'
              className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
            >
              PALMO
            </Link>
            <p className='text-gray-400 text-sm'>
              Creating digital experiences that inspire and engage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Navigation</h3>
            <div className='grid grid-cols-2 gap-2'>
              <Link
                href='/'
                className='text-gray-400 hover:text-white transition-colors flex items-center group'
              >
                Home
                <ArrowUpRight className='h-4 w-4 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-1 transition-all' />
              </Link>
              <Link
                href='/portfolio'
                className='text-gray-400 hover:text-white transition-colors flex items-center group'
              >
                Portfolio
                <ArrowUpRight className='h-4 w-4 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-1 transition-all' />
              </Link>

              <Link
                href='/contact'
                className='text-gray-400 hover:text-white transition-colors flex items-center group'
              >
                Contact
                <ArrowUpRight className='h-4 w-4 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-1 transition-all' />
              </Link>
              <Link
                href='/shop'
                className='text-gray-400 hover:text-white transition-colors flex items-center group'
              >
                Shop
                <ArrowUpRight className='h-4 w-4 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-1 transition-all' />
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <div className='space-y-2'>
              <Link
                href='/terms'
                className='text-gray-400 hover:text-white transition-colors block'
              >
                Terms & Conditions
              </Link>
              <Link
                href='/privacy'
                className='text-gray-400 hover:text-white transition-colors block'
              >
                Privacy Policy
              </Link>
              <Link
                href='/cookies'
                className='text-gray-400 hover:text-white transition-colors block'
              >
                Cookie Policy
              </Link>
              <Link
                href='/anpc'
                className='text-gray-400 hover:text-white transition-colors block'
              >
                ANPC
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Connect</h3>
            <p className='text-gray-400 mb-4'>Follow me on social networks:</p>
            <div className='flex gap-4'>
              <Link
                href='https://behance.net'
                target='_blank'
                className='bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors'
              >
                <CircleUserRound className='h-5 w-5' />
              </Link>
              <Link
                href='https://instagram.com'
                target='_blank'
                className='bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors'
              >
                <Instagram className='h-5 w-5' />
              </Link>
              <Link
                href='https://pinterest.com'
                target='_blank'
                className='bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors'
              >
                <Pin className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} PALMO. All rights reserved.
            </p>
            <p className='text-gray-400 text-sm'>
              Designed & Developed with ❤️ by{' '}
              <Link
                href='https://x.com/rxbjr_'
                target='_blank'
                className='hover:text-white transition-colors'
              >
                RXB Jr
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className='absolute right-8 -top-6 bg-black hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition-all hover:-translate-y-1'
        aria-label='Back to top'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='m18 15-6-6-6 6' />
        </svg>
      </button>
    </footer>
  )
}
