import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About the Project</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text=' 
              ecoKI is an online platform with the goal of enabling a low-threshold and fast entrance of AI for 
              the increase of energy efficiency in the production.'
              label='ecoKI'
              path='/projekt'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The KIPro project is investigating how an AI-supported platform can improve energy efficiency in industrial plants.'
              label='KIPro'
              path='/projekt'
            />  
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Comminution of the raw material is an important process step in compound feed production. 
              It leads to the required product structure, which is relevant for blending and pelleting. '
              label='Mixed feed production'
              path='/projekt'
            />
            <CardItem
              src='images/img-4.jpg'
              text='At a mixed feed plant, the unbroken grain cereals are to be detected after the grain crushing process with 
              the help of an AI camera. 
              Grain are to be detected with the aid of an AI camera.'
              label='AI-Camera'
              path='/projekt'
            />
           
          </ul>

      <br></br> <br></br>
        <p>
          <h3>The complete code to the website and tracker is open source and can be found <a href="https://github.com/JHamudi/BatchProcesses-AutomaticProductFeaturesCollection/tree/main">here</a>.</h3>
        </p>
     
         
        </div>
      </div>
    </div>
  );
}

export default Cards;