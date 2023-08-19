import React from 'react'
import Intro from '../../Components/Into/Intro'
import Form from '../../Components/Form/Form'
import house from '../../assets/house.jpg'

const Buyers = () => {
  return (
    <>
      <Intro image={house} text="Book A visit"/>
      <Form type="buyers"/>
    </>
  )
}

export default Buyers