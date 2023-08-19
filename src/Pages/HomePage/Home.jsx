import React from 'react'
import About from '../../Components/About/About'
import Banner from '../../Components/Banner/Banner'
import Contact from '../../Components/Contact/Contact'
import Featured from '../../Components/Featured/Featured'
import Row from '../../Components/Row/Row'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Banner/>
      <Featured/>
      <Row/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home