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
               
                <h3>Front-End Team:</h3>
                    Name: Muhamed Jaber <br></br>
                    Email: jaber@uni-bremen.de
                    <br></br>
                    <br></br>
                <h3>KI-Team:</h3>
                    Name: Mirco Eilers <br></br>
                    Email: eilers.mirco@icloud.com
                    <br></br>
                    <br></br>
                    Name: Ibrahim Erdogan <br></br>
                    Email: i.erdogan99@outlook.de
                </ul>
            </div> 
            <br></br>
            <div>
            <h2 class="left">Supervisor:</h2>
                <ul>
                    Name: M.Sc. Maite Alvela <br></br>
                    Email: malvela@uni-bremen.de
                    <br></br>
                    <br></br>
                    Name: Prof. Dr.-Ing. Klaus-Dieter Thoben <br></br>
                    Email: thoben@uni-bremen.de
                    
        
                </ul>
            </div> 
       
        </div>
            
        <Footer />
      
        </>
        
    );



};



export default Contact;