import React from 'react';
import heroImg from '../../assets/hero.png';
import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className = "hero container ">
      <div className="hero-text">
        <h1 className="text-[50px] font-semibold">We ensure better education for a better world</h1>
        <p className="max-w-[700px] mx-auto mt-[10px] mb-[20px]">
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills,
          and experiences needed to excel in the dynamic field of education.
        </p>
        <button
         className="btn">
          Explore more <img src = {dark_arrow} className= ''></img>
        </button>
      </div>
    </div>
  );
};

export default Hero;

