import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Icons from '../Icons/Icons';
import Navbar from '../Navbar/Navbar';
import  './Home.css';

const Home = () => {
  return (
    <div className='home-page'>
      <div className="container">
        <Navbar />
        <Hero />
        <Icons />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
