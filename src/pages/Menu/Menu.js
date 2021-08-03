import React from "react";
import app from "../../Firebase/firebase-config";
//import './Menu.css';

import '../../App.css';
import Cards from '../../components/Cards';
import HeroSection from '../../components/HeroSection';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
//import Footer from '../Footer';

//   <Footer /> 
function Menu() {
  
  return (
    <>
          <Navbar />
      <HeroSection />
      <Cards />
      <Footer />

     
    </>
  );
}

export default Menu;

