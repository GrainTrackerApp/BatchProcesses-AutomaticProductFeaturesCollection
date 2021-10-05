import React from "react";
import Navbar from "./Navbar";
import CardItem from './CardItem';

import './projekt.css';
import Footer from "./Footer";


const Projekt = () => {

    return (
        
     
        <>
         <Navbar />
         <h1>About the Project</h1>
         <div className = "cards">


        
         <CardItem 
              src='images/img-8.jpg'
              text='ecoKI is an online platform with the goal of enabling a low-threshold and fast entrance of AI for the increase of 
              energy efficiency in the production.
              ecoKI provides tools, knowledge and infrastructure for the use of digitization and AI in a user-friendly way.
              ecoKI contributes networking opportunities with professionals and AI experts.
              The hurdles in the operational application of AI and digitization for SMEs are high.
              The path from prototype out of the research lab to productive use in companies is time-consuming and cost-intensive.
              ecoKI aims to reduce these hurdles!'                        
              label='ecoKI'
              path='/projekt'
            />
            <br></br><br></br><br></br>
            <CardItem
              src='images/img-2.jpg'
              text='The KIPro project is investigating how an AI-supported platform can improve energy efficiency in industrial plants. 
              The focus is particularly on small and medium-sized enterprises (SMEs).
              The targeted platform is composed of various solution components with special consideration of the use of 
              methods of artificial intelligence. The goal is to provide transparency of energy use, suggestions for optimized processes and a simple 
              processes and a simple user interface to reduce primary energy consumption. Current energy management systems record 
              exclude energy data, present it and determine key figures for evaluation. The KIPro project uses this prepared 
              knowledge to support production staff in making decisions on the choice of process parameters for energy-efficient production. 
              energy-efficient production.'
              label='KIPro'
              path='/projekt'
              

              
            />
           
            
             <br></br><br></br><br></br>
            <CardItem 
              src='images/img-3.jpg'
              text='Grinding of the raw material is an important process step in the manufacture of mixed feed. 
              It leads to the required product structure, which is relevant for mixing and pelleting. 
              In addition, crushing increases the particle surface and thus also contributes to improved nutrient uptake by the animals.'
              label='Mixed feed production'
              path='/projekt'
            />
             <br></br><br></br><br></br>
            <CardItem
              src='images/img-4.jpg'
              text='In a mixed feed manufacturing, after the grain crushing process, 
              the uncrushed grains are to be detected with the help of an AI camera. 
              In this systems engineering project, a client-server system is to be developed that automatically 
              detects or outputs the grains that have not been crushed via a USB StreamCam with an AI, so that 
              engineers can subsequently use these results for optimal process parameter settings.'
              label='AI-Camera'
              path='/projekt'
            />
            </div>
     

            
            <h2>read more about the project: </h2>
            <div className= "links">
               <p> KIPro: <a href="http://www.kipro-projekt.de/">http://www.kipro-projekt.de/</a></p>
               <p> ecoKI: <a href="https://www.ecoki.de/">https://www.ecoki.de/</a></p>
            </div>
            <br></br>
     <Footer></Footer>
        </>


    );



};



export default Projekt;