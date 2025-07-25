import React, { useState, useEffect } from 'react';
import './Navbar.css'
import log from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const[mobileMenu,setmobileMenu]= useState(false);
  
const toggleMenu =()=>{
  mobileMenu? setmobileMenu(false) : setmobileMenu(true)
}
  return (
        //
    <nav className = {` ${ sticky ? 'dark-nav' : ''} container`}>
      <img src= {log} alt='' className = 'logo'/>
      <ul className={mobileMenu ? "" :'hide-mobile-menu'} >
        
         <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">
         
            Contact us
           
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className='menu-icon'  onClick={toggleMenu}/>
    
    </nav>
  )
}

export default Navbar
