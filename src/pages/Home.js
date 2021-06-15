import React from "react";
import Cards from './Cards';
import HeroSection from './HeroSection';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards /> 
      <Footer />   
    </>
  );
};

export default Home;
