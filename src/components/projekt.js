import React from "react";
import Navbar from "./Navbar";
import CardItem from './CardItem';

import './projekt.css';

const Projekt = () => {

    return (
        
     
        <>
         <Navbar />
         <h1>Project</h1>
         <div className = "cards">


        
         <CardItem 
              src='images/img-9.jpg'
              text='In the Fu2-Experte project, researchers at the University of Bremen are working together with a feed manufacturer in Lower Saxony to 
              feed manufacturer to increase the energy efficiency of the animal feed production process. 
              To this end, they are developing a computer-supported expert system that uses the experience of employees 
              for adaptive process control and additionally balances and optimizes the energy flows with an extensive 
              measurement technology to balance and optimize energy flows. The system is to recognize the relations between input products, 
              process control and product quality and provide timely recommendations for process control.'

                                /* Eventuell noch Links setzen*/

              label='Fu2-Experte'
              path='/projekt'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The company Austing Mischfutterwerk GmbH & Co. KG manufactures compound feed. 
              Mixed feed is a product manufactured according to the most modern scientific 
              which is specifically geared to the respective needs and performance of the 
              performance of the livestock and provides them optimally with nutrients.
              nutrients. 
              A total of 19 people are employed in the office and in production. 
              19 employees, some of whom work in three shifts around the clock. 
              around the clock. 
              Given the relatively small number of employees, the
               production figures (245,000 metric tons per year) can be achieved 
               The relatively small number of employees makes it possible to achieve the remarkable production figures (245,000 tons per year) because all processes are highly mechanized and automated.'

                              /* Eventuell noch Links setzen*/

              label='Austing'
              path='/projekt'

              
            />
            <CardItem 
              src='images/img-3.jpg'
              text='Grinding of the raw material is an important process step in the manufacture of mixed feed. 
              It leads to the required product structure, which is relevant for mixing and pelleting. 
              In addition, crushing increases the particle surface and thus also contributes to improved nutrient uptake by the animals.'
              label='Mischfutterherstellung'
              path='/projekt'
            />
            <CardItem
              src='images/img-4.jpg'
              text='In a mixed feed manufacturing, after the grain crushing process, 
              the uncrushed grains are to be detected with the help of an AI camera. 
              In this systems engineering project, a client-server system is to be developed that automatically 
              detects or outputs the grains that have not been crushed via a USB StreamCam with an AI, so that 
              engineers can subsequently use these results for optimal process parameter settings.'
              label='KI-Kamera'
              path='/contact'
            />

</div>
     
        </>
    );



};

export default Projekt;