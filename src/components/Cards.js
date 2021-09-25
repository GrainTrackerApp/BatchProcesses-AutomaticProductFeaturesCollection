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
              src='images/img-9.jpg'
              text=' In the Fu2-Experte project, researchers at the University of Bremen are working together with a feed manufacturer in Lower Saxony to 
              feed manufacturer to increase the energy efficiency of the animal feed production process.'
              label='Fu2-Experte'
              path='/projekt'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The company Austing Mischfutterwerk GmbH & Co. KG produces compound feed.
              With the relatively small number of employees, the considerable production figures (245,000 tons per year) can be achieved 
              because all processes are highly mechanized and automated.'
              label='Austing'
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
              path='/products'
            />
           
          </ul>

      <br></br> <br></br>
        <p>
          <h3>The complete code to the website and tracker is open source and can be found <a href="https://github.com/JHamudi/Lehrprojekt_21-22/tree/master">here</a>.</h3>
        </p>
     
         
        </div>
      </div>
    </div>
  );
}

export default Cards;