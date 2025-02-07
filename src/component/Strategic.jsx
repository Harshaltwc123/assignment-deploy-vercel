import React from 'react'
import img1 from '../assets/Strategic1.png'

function Strategic() {
  return (
    <>
    <div className='relative pt-6'>
      <img src={img1} alt="" className='w-full ' />
      <div className='absolute xl:top-72 lg:top-48 md:top-40 sm:top-32 xs:top-28 ms:top-24 xl:left-56 lg:left-40 md:left-32 sm:left-24 xs:left-20 ms:left-12  transform -translate-x-1/2 -translate-y-1/2'>
      <h1 className='xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl ms:text-[18px] text-white font-semibold'>Strategic <br /> Guidance</h1>
      </div>
      </div>
    </>
  )
}

export default Strategic
