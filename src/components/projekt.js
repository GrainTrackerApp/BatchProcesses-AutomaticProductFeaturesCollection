import React from "react";
import Navbar from "./Navbar";
import CardItem from './CardItem';

import './projekt.css';

const Projekt = () => {

    return (
        
     
        <>
         <Navbar />
         <h1>Projekt</h1>
         <div className = "cards">


        
         <CardItem 
              src='images/img-9.jpg'
              text='Im Projekt Fu2-Experte wollen Forscher der Universität Bremen gemeinsam mit einem niedersächsischen 
              Futtermittelhersteller die Energieeffizienz des Produktionsprozesses von Tierfutter steigern. 
              Dazu entwickeln sie ein rechnergestütztes Expertensystem, das die Erfahrungen der Mitarbeiter 
              für eine lernfähige Prozesssteuerung nutzt und zusätzlich die Energieströme mit einer umfangreichen 
              Messtechnik bilanziert und optimiert. Das System soll die Relationen zwischen Eingangsprodukten, 
              Prozessführung und Produktqualität erkennen und zeitnah Empfehlungen zur Prozesssteuerung geben.'

                                /* Eventuell noch Links setzen*/

              label='Fu2-Experte'
              path='/projekt'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Die Firma Austing Mischfutterwerk GmbH & Co. KG stellt Mischfutter her. 
               Mischfutter ist ein nach modernsten wissenschaftlichen Erkenntnissen 
               hergestelltes Produkt, das gezielt auf den jeweiligen Bedarf und 
               die Leistung der Nutztiere ausgerichtet ist und diese optimal mit
               Nährsoffen versorgt. 
               Insgesamt sind im Büro und in der Produktion 
               19 Mitarbeiter beschäftigt, die teilweise in drei Schichten rund um 
               die Uhr arbeiten. 
               Bei der relativ kleinen Mitarbeiterzahl können die
                beachtlichen Produktionszahlen (245 000Tonnen Jahresleistung) 
                erreicht werden, weil in allen Abläufen ein hoher Grad der Technisierung und Automatisierung gegeben ist.'

                              /* Eventuell noch Links setzen*/

              label='Austing'
              path='/projekt'

              
            />
            <CardItem 
              src='images/img-3.jpg'
              text='Das Zerkleinern der Rohware ist ein wichtiger Verfahrensschritt in der Mischfutterherstellung. 
              Es führt zu der erforderlichen Produktstruktur, welche für das Mischen und Pelletieren relevant ist. 
              Zudem vergrößert das Zerkleinern die Partikeloberfläche und trägt damit auch zu einer verbesserten 
              Nährstoffaufnahme bei den Tieren bei.'
              label='Mischfutterherstellung'
              path='/projekt'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Bei einem Mischfutterwerk sollen nach dem Kornzerkleinerungsprozess die nicht aufgebrochenen 
              Körnergetreide mit Hilfe einer KI-Kamera erkannt werden.
              Im diesem Systemtechnik-Projekt soll ein Client-Server-System entwickelt werden, welches über eine 
              USB-StreamCam mit einer KI die nicht zerkleinerten Körner automatisch detektiert bzw. ausgibt, sodass 
              anschließend Ingenieure diese Ergebnisse für eine optimale Prozessparametereinstellung nutzen können.'
              label='KI-Kamera'
              path='/contact'
            />

</div>
     
        </>
    );



};

export default Projekt;