import React from 'react'
import Navbar from '../Navbar'
import ContactHeader from './ContactHeader'
import ContactInfo from './ContactInfo'
import ContactFooter from './ContactFooter'

const Contact = () => {
  return (
    <div className='w-full bg-white'>
      <Navbar/>
      <ContactHeader/>
      <ContactInfo/>
      <ContactFooter/>
    </div>
  )
}

export default Contact