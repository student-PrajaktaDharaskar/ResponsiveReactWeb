import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container"> 
      <Title subTitle='Our Programs' Title='What We Offer'/> 
        <Programs/> 
        <About/> 
        <Title subTitle='Gallery' Title='Campus Photos'/> 
        <Campus/>
        <Title subTitle='TESTIMONIALS' Title='What Student Says'/>
        <Testimonials/> 
        <Title subTitle='Contact Us' Title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>  
    </div>
  )
}

export default App
