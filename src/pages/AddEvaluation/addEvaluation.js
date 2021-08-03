import React from 'react';
import './addEvaluation.css';

import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class AddEvaluation extends React.Component {

    
    render() {

      const value = this.props.value;
      return (
       
       <div className= "App">

        
         <div id = "headline"><h1>Auswertungen hinzufügen:</h1></div> 
        <div id="param"> <ButtonGroup disableElevation variant="contained" color="primary">
        <Button>+</Button>
        <Button>1</Button>
        <Button>-</Button>
      </ButtonGroup></div>
          <fieldset className="set1">
            <h4 className="legend"> 
            <input class="one" value ={value}/>Anzahl ausgewertete Bilder </h4>
            <h4 className="legend2"> 
            <input class="one" value ={value}/>Anzahl nicht aufgebrochne Körner </h4>
          </fieldset>

         
          
         


               
      {/*  
        <Button color="primay">Button</Button>
          <h2>Hello World</h2>
      <Button color="primay">Button</Button>  */} 
  
      </div>
          );
    }
  }

 export default AddEvaluation;




