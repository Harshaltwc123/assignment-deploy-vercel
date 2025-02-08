import React from 'react'
import img1 from "../assets/Rightarrow.png"

function Search() {
  return (
    <>
    <div className='bg-black text-white flex flex-col justify-center items-center pt-24'>
        <div className='flex xs:gap-8 ms:gap-4 pb-12 '>
            <input type="text" placeholder='What are you searching for?' className='md:w-[600px] sm:w-[500px] xs:w-[400px] ms:w-[280px] md:h-14 sm:h-12 xs:h-10 pl-6 rounded-lg bg-slate-250 xs:text-xl ms:text-[16px] text-black font-semibold'/>
            <div className='bg-white md:w-14 sm:w-12 xs:w-10 ms:w-6 rounded-full flex justify-center items-center'>
            <img src={img1} alt="" className=' rounded-2xl md:w-9 sm:w-7 xs:w-5 ms:w-4 sm:h-7 xs:h-5 ms:h-4 '/>
            </div>
        </div>
        <div className='w-[90%] flex justify-between border-b-2 border-white mb-14'>
            <h1 className='py-4 sm:text-lg xs:text-sm ms:text-[11px]'>Are you looking for something like these?</h1>
            <h1 className='py-4 sm:text-lg xs:text-sm ms:text-[11px]'>A-Z Service index</h1>
        </div>
        <div className='w-[90%] mb-44'>
            <ul className=' flex justify-around items-center sm:text-lg xs:text-sm ms:text-[11px]'>
                <li>Hubnex  labs</li>
                <li>Hubnex  Invest</li>
                <li>Hubnex Educate</li>
                <li>Keek</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Search
