import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Progaram from './components/Program/Program.jsx'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import  Contact from './components/Contact/contact.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer'


const  App  = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
<Title subtitle = 'What We Offer' title =  'OUR PROGRAM'/>
        
        <Progaram/>
  
    <About/>
    <Title  title = 'Gallery'  subtitle =  'Campus Photos'/>
      
    <Campus/>
    <Title subtitle = 'What student says' title =  'Testimonials'/>
    <div className="container">
        <Testimonials/>
      </div>
     
   <Title subtitle = 'Contact Us' title =  'Get in touch'/>
    <Contact/>
    
      <div className="container">
        <Footer/>
      </div>
  

    
    </>
  )
}

export default App
