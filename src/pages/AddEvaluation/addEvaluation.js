import React from 'react';
import './addEvaluation.css';

import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Index, { ObjectDetector } from "../../components/Index";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


class AddEvaluation extends React.Component {

    
    render() {

      return (
       
        
       <div className= "Detection">
 <>             <Navbar />
 <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br>
 <br></br>
 <a className= "link" target="_blank" rel="noopener noreferrer" href="http://127.0.0.1:8000/grain_project/get_res/">Image Detection Site!</a>
             
                <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br>
                {/*<ObjectDetector />
                <br></br> <br></br> <br></br>
                <br></br> <br></br> <br></br>
                */  }
                <Footer />
                </>
        
      </div>
          );
    }
  }

 export default AddEvaluation;



