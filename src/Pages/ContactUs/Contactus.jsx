import React from 'react'
import Contact from '../../Components/Contact/Contact'
import pic from '../../assets/image2.jpg'
import Intro from '../../Components/Into/Intro'

const Contactus = () => {
  return (
    <>
      <Intro image={pic} text="Talk to us"/>
      <Contact/>
    </>
  )
}

export default Contactus