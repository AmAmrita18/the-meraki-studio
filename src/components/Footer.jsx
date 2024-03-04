import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='w-[90%] pl-20 pr-5  h-full max-w-[1200px] flex justify-between pb-10'>
          <div className='flex flex-row gap-x-8 items-center'>
            <h1 className='text-black pl-3 text-[10px] font-[700]'>SOCIAL:</h1>
            <ul className='text-black pl-3 text-[10px] font-[700] flex flex-row gap-x-4'> 
              <li>/FACEBOOK</li>
              <li>/INSTAGRAM</li>
              <li>/LINKEDIN</li>
            </ul>
          </div>

          <div>
            <button className='bg-black'>
              <h1 className='text-white text-[9px] font-[700]'>SCROLL DOWN</h1>
            </button>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='flex flex-row'>
            <h1 className='text-black pl-3 text-[10px] font-[700]'>2024</h1>
            <h1 className='text-black pl-3 text-[10px] font-[700]'> THE MERAKI STUDIO</h1>
          </div>
        </div>
    </div>
  )
}

export default Footer