import React from 'react'
import heroImg from '../../assets/hero.png'
const Hero = () => {
  return (

    <div
    className='w-full h-[135px] m-w-[1200px] relative mt-14'
    style={{
        backgroundImage: `url('${heroImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
        <h1 className='text-white text-[195px] pl-28 mx-auto font-[700] top-[-80px] absolute'>MERAKI</h1>
    </div>
  )
}

export default Hero