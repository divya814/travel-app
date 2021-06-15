import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Link} from "react-router-dom"

function HeroSection() {
   
  return (
    <div className='hero-container'>
      
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to="/Bookcar">
          <button className="btn text-dark bg-light p-3">
          Book your car
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
