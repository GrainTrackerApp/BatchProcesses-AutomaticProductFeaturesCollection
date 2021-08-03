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
              text=' Im Projekt Fu2-Experte wollen Forscher der Universität Bremen gemeinsam mit einem niedersächsischen 
              Futtermittelhersteller die Energieeffizienz des Produktionsprozesses von Tierfutter steigern. 
              Dazu entwickeln sie ein rechnergestütztes Expertensystem, das die Erfahrungen der Mitarbeiter 
              für eine lernfähige Prozesssteuerung nutzt und zusätzlich die Energieströme mit einer umfangreichen 
              Messtechnik bilanziert und optimiert.'
              label='Fu2-Experte'
              path='/projekt'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Die Firma Austing Mischfutterwerk GmbH & Co. KG stellt Mischfutter her.
               Insgesamt sind im Büro und in der Produktion 
              19 Mitarbeiter beschäftigt, die teilweise in drei Schichten rund um 
              die Uhr arbeiten. Bei der relativ kleinen Mitarbeiterzahl können die
               beachtlichen Produktionszahlen (245 000Tonnen Jahresleistung) 
               erreicht werden, weil in allen Abläufen ein hoher Grad der Technisierung und Automatisierung gegeben ist.'
              label='Austing'
              path='/projekt'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Das Zerkleinern der Rohware ist ein wichtiger Verfahrensschritt in der Mischfutterherstellung. 
              Es führt zu der erforderlichen Produktstruktur, welche für das Mischen und Pelletieren relevant ist. '
              label='Mischfutterherstellung'
              path='/projekt'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Bei einem Mischfutterwerk sollen nach dem Kornzerkleinerungsprozess die nicht aufgebrochenen 
              Körnergetreide mit Hilfe einer KI-Kamera erkannt werden.'
              label='KI-Kamera'
              path='/products'
            />
           
          </ul>

      <br></br> <br></br>
        <p>
          <h3>Der komplette Code zu der Website und dem Tracker ist Open Source und <a href="https://github.com/JHamudi/Lehrprojekt_21-22/tree/master">hier</a> zu finden.</h3>
        </p>
     
         
        </div>
      </div>
    </div>
  );
}

export default Cards;