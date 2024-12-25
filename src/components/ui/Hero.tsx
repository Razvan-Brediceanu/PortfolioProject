import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='relative min-h-screen bg-[#c4a0ff] flex flex-col items-center justify-center px-4'>
      {/* Scalloped border decoration */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute inset-0 border-[32px] border-white rounded-[80px] scale-[1.1]'></div>
      </div>

      {/* Hero content */}
      <div className='relative z-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center'>
        {/* Image section */}
        <div className='relative aspect-[3/4] w-full max-w-md mx-auto'>
          <Image
            src='/2150379243.jpg' // Replace with your actual image path
            alt='Portrait'
            fill
            className='object-cover rounded-lg grayscale'
            priority
          />
        </div>

        {/* Text content */}
        <div className='text-center md:text-left space-y-16'>
          {/* Greeting text */}
          <div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
              Hi there!
            </h1>
            <p className='text-2xl md:text-3xl text-gray-700'>
              Sooo nice to see you around
            </p>
          </div>

          {/* Name and description section */}
          <div className='space-y-8'>
            <h2 className='text-[4rem] md:text-[5.5rem] leading-none font-bold tracking-tight'>
              PALMO
              <br />
              SUTO
            </h2>
            <div className='space-y-4 text-gray-700'>
              <p className='text-xl'>self-development + relationships</p>
              <div className='space-y-1 text-sm uppercase tracking-wider'>
                <p>POSITIVE PSYCHOLOGY</p>
                <p>SOMATIC EXPERIENCING</p>
                <p>INTERNAL FAMILY SYSTEMS</p>
              </div>
            </div>
            <Link
              href='/contact'
              className='inline-block border-2 border-black rounded-full px-8 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors'
            >
              WORK WITH ME
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div
        className='absolute bottom-0 left-0 right-0 h-32 bg-white'
        style={{
          clipPath: 'ellipse(70% 100% at 50% 100%)',
        }}
      ></div>
    </section>
  )
}
