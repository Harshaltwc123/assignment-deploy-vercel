import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'


function Scroll() {
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center'>
      <h1 className='pt-12 text-3xl font-semibold pb-16 px-4'>Top companies we worked with </h1>

      <div className='bg-zinc-800 flex gap-4 h-28 w-full justify-evenly items-center px-8'>
      <img src={img1} alt="" className='md:h-16 md:w-28 sm:h-12 sm:w-20 xs:h-10 xs:w-16 ms:h-8 ms:w-12'/>
      <img src={img2} alt="" className='md:h-14 md:w-28 sm:h-12 sm:w-20 xs:h-10 xs:w-16 ms:h-8 ms:w-12 pt-2'/>
      <img src={img3} alt="" className='md:h-14 md:w-28 sm:h-10 sm:w-20 xs:h-9 xs:w-16 ms:h-6 ms:w-12'/>
      <img src={img4} alt="" className='md:h-14 md:w-28 sm:h-9 sm:w-20 xs:h-8 xs:w-16 ms:h-5 ms:w-12'/>
      <img src={img5} alt="" className='md:h-12 md:w-28 sm:h-8 sm:w-20 xs:h-8 xs:w-16 ms:h-5 ms:w-12'/>
      </div>
    </div>
  )
}

export default Scroll
