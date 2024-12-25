import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-transparent z-50'>
      {/* Logo */}
      <Link href='/' className='text-2xl font-bold'>
        <Image
          src='/graphic-designer.png'
          alt='Logo'
          width={40}
          height={40}
          className='object-contain'
        />
      </Link>

      {/* Navigation Links */}
      <ul className='flex items-center space-x-8'>
        <li>
          <Link href='/' className='hover:opacity-70 transition-opacity'>
            home
          </Link>
        </li>
        <li>
          <Link
            href='/portfolio'
            className='hover:opacity-70 transition-opacity underline underline-offset-4'
          >
            portfolio
          </Link>
        </li>

        <li>
          <Link href='/contact' className='hover:opacity-70 transition-opacity'>
            contact
          </Link>
        </li>

        <li>
          <button className='hover:opacity-70 transition-opacity'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
        </li>
        <li>
          <Link href='/cart' className='hover:opacity-70 transition-opacity'>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}
