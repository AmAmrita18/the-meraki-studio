import React from 'react'
import heroImg from '../../assets/hero.png'
const Hero = () => {
  return (

    <div
    className='w-full h-[135px] relative mt-16'
    style={{
        backgroundImage: `url('${heroImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
        <h1 className='text-white text-[195px] ml-24 font-[700] top-[-80px] absolute'>MERAKI</h1>
    </div>
  )
}

export default Hero