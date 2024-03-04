import React from 'react'


import Header from './Header'
import Hero from './Hero'
import HomeInfo from './HomeInfo'
import HomeServices from './HomeServices'

const HomePage = () => {
  return (
    <div className='w-full'>
        <Header/>
        <Hero/>
        <HomeInfo/>
        <HomeServices/>
    </div>
  )
}

export default HomePage