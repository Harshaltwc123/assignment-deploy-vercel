import React from 'react'
import img1 from "../assets/Focus2.png"
import img2 from "../assets/Focus3.png"
import img3 from "../assets/Focus4.png"
import img4 from "../assets/Focus5.png"

function Ourfocus() {
  return (
   <>
   <div className='bg-black pb-16'>
   <div className='bg-black text-white pt-9'>
   <h1 className='text-white text-3xl font-semibold'>Our Focus</h1>
   <p className='pt-6 pb-9'>At Hubnex Invest, we are dedicated to nurturing the next generation of innovative startups.</p>
   </div>

   <div className='flex flex-col flex-wrap bg-black px-4'>
   <div className='bg-black w-full py-10 flex gap-28 flex-wrap justify-center'>
    {/* card1 */}
   <div className='flex justify-between items-center max-w-xs gap-4 h-10 bg-black text-white'>
    <img src={img1} alt="" />
    <p className='text-start'>Access to experienced 
    guidance and expertise</p>
   </div>
   {/* card2 */}
   <div className='flex justify-between items-center max-w-xs gap-4 h-10 bg-black text-white'>
    <img src={img2} alt="" />
    <p className='text-start'>Investment opportunities for 
    growth and expansion</p>
   </div>
   </div>

   <div className='bg-black w-full py-16 gap-28 flex flex-wrap justify-center'>
    {/* card3 */}
   <div className='flex justify-between items-center max-w-xs gap-4 h-10 bg-black text-white'>
    <img src={img3} alt="" />
    <p className='text-start'>Technology Enablement for 
    building scalable solutions</p>
   </div>
   {/* card4 */}
   <div className='flex justify-between items-center max-w-xs gap-4 h-10 bg-black text-white'>
    <img src={img4} alt="" />
    <p className='text-start'>Collaboration and networking 
    opportunities in the startup ecosystem</p>
   </div>
   </div>
   </div>
   </div>
   </>
  )
}

export default Ourfocus
