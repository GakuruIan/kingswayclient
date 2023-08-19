import React from 'react'

import Form from '../../Components/Form/Form'
import Intro from '../../Components/Into/Intro'
import house from '../../assets/house2.jpg'

const Sellers = () => {
  return (
    <>
      <Intro image={house} text="Sell with us"/>
      <Form type="sellers"/>
    </>
  )
}

export default Sellers