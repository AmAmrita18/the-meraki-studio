import React from 'react'


import Header from './Header'
import Hero from './Hero'
import HomeInfo from './HomeInfo'
import HomeServices from './HomeServices'
import HomeContact from './HomeContact'

const HomePage = () => {
  return (
    <div className='w-full bg-white'>
        <Header/>
        <Hero/>
        <HomeInfo/>
        <HomeServices/>
        <HomeContact/>
    </div>
  )
}

export default HomePage