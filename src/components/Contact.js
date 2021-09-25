import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardItem from './CardItem';

import './Contact.css';

const Contact = () => {

    return (
        
     
        <>
         <Navbar />
        

        <h1>Contact List</h1>
        <div className="contact">

        <div>
            <h2 class="left">Students:</h2>
                <ul>
                    <li>jaber@uni-bremen.de</li>
                    <li>i.erdogan99@outlook.de</li>
                    <li>eilers.mirco@icloud.com</li>
                </ul>
            </div> 
            <br></br>
            <div>
            <h2 class="left">Supervisor:</h2>
                <ul>
                    <li>malvela@uni-bremen.de</li>
                    <li>thoben@uni-bremen.de</li>
        
                </ul>
            </div> 
       
        </div>
            
        <Footer />
      
        </>
        
    );



};



export default Contact;