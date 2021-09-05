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
              feed manufacturer to increase the energy efficiency of the animal feed production process. 
              To this end, they are developing a computer-supported expert system that uses the experience of employees 
              for adaptive process control and additionally balances and optimizes the energy flows with an extensive 
              measurement technology to balance and optimize energy flows.'
              label='Fu2-Experte'
              path='/projekt'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The company Austing Mischfutterwerk GmbH & Co. KG produces compound feed.
              A total of 19 employees work in the office and 
             19 employees, some of whom work in three shifts around the clock. 
             around the clock. With the relatively small number of employees, the
              considerable production figures (245,000 tons per year) can be achieved 
              The relatively small number of employees makes it possible to achieve the remarkable production 
              figures (245,000 tons per year) because all processes are highly mechanized and automated.'
              label='Austing'
              path='/projekt'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Comminution of the raw material is an important process step in compound feed production. 
              It leads to the required product structure, which is relevant for blending and pelleting. '
              label='Mischfutterherstellung'
              path='/projekt'
            />
            <CardItem
              src='images/img-4.jpg'
              text='At a mixed feed plant, the unbroken grain cereals are to be detected after the grain crushing process with 
              the help of an AI camera. 
              Grain are to be detected with the aid of an AI camera.'
              label='KI-Kamera'
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