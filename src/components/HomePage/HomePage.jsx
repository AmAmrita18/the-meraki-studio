import React from 'react'


import Header from './Header'
import Hero from './Hero'
import HomeInfo from './HomeInfo'

const HomePage = () => {
  return (
    <div className='w-full'>
        <Header/>
        <Hero/>
        <HomeInfo/>
    </div>
  )
}

export default HomePage