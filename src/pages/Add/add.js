import axios from 'axios';
import './add.css';
import React, {Component, useState} from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

  
const onFileChange = (e) => {
  
  const file = e.target.files[0]
  const storageRef = Add.storage().ref()
  const fileRef = storageRef.child(file.name)
  fileRef.put(file).then(() => {
    console.log("Uploaded file", file.name)
  })
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
    }
    
var MAIZE_BG = 0
var MAIZE_UG = 0
var ROGGEN_BG = 0
var ROGGEN_UG = 0
var TRITICALE_BG = 0
var TRITICALE_UG = 0
var WHEAT_BG = 0
var WHEAT_UG = 0

function Add() {

  const [datas, setData] = useState(null)
  const [print, setPrint] = useState(false)
  function getData(val){
  
    console.log(val)
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
    }
  
    
    // ### MAIZE ###
      function updateMAIZE_BG(val){
        setPrint(false)
        MAIZE_BG = val.target.value   
      }
  
      function updateMAIZE_UG(val){
        setPrint(false)
        MAIZE_UG = val.target.value 
      }
  
       // ### ROGGEN ###
        function updateROGGEN_BG(val){
          setPrint(false)
          ROGGEN_BG = val.target.value   
        }
    
        function updateROGGEN_UG(val){
          setPrint(false)
          ROGGEN_UG = val.target.value 
        }

        // ### TRITICALE ###
        function updateTRITICALE_BG(val){
          setPrint(false)
          TRITICALE_BG = val.target.value   
        }
    
        function updateTRITICALE_UG(val){
          setPrint(false)
          TRITICALE_UG = val.target.value 
        }

        // ### WHEAT ###
        function updateWHEAT_BG(val){
          setPrint(false)
          WHEAT_BG = val.target.value   
        }
    
        function updateWHEAT_UG(val){
          setPrint(false)
          WHEAT_UG = val.target.value 
        }


let data = [
  {   
    name: 'Maize',
    bg: MAIZE_BG,
    ug: MAIZE_UG,

  },
  {
    name: 'Roggen',
    bg: ROGGEN_BG,
    ug: ROGGEN_UG,

  },
  {
    name: 'Triticale',
    bg: TRITICALE_BG,
    ug: TRITICALE_UG,

  },
  {
    name: 'Wheat',
    bg: WHEAT_BG,
    ug: WHEAT_UG,

  },

];


	
	return (
    <>
         <Navbar />


		<div className="App">
			<div>
      <div class="return"></div>

<br></br><br></br>


			<h1>number of broken/unbroken grains</h1>
      <br></br>

			   <ResponsiveContainer className="containers" width="50%" aspect={2} >
        <BarChart
          width={500}
          height={300}
          data={data}      
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
		  <br></br>
      <br></br>

		  <Legend />

          <Bar dataKey="bg" fill="#8884d8" />    // bg: broken grains
          <Bar dataKey="ug" fill="#82ca9d" /> // ug: unbroken grains"
        </BarChart>

      </ResponsiveContainer>
	

      <br></br>
      

    
<div class="wrapper">
      <div id="first">
     
        <button onClick={()=>setPrint(true) }> Maize bg </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateMAIZE_BG}/>
    <div className= "divider"></div>
        <button onClick={()=>setPrint(true)}> Maize ug </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateMAIZE_UG}/>
      <br></br><br></br>
        <button onClick={()=>setPrint(true)}> Roggen bg </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateROGGEN_BG}/>
        <div className= "divider"></div>
        <button onClick={()=>setPrint(true)}> Roggen ug </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateROGGEN_UG}/>
      </div>
      <br></br>
      <div id="second">
        <button onClick={()=>setPrint(true)}>  Triticale bg </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateTRITICALE_BG}/>
        <div className= "divider"></div>
        <button onClick={()=>setPrint(true)}> Triticale ug </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateTRITICALE_UG}/>
        <br></br><br></br>
        <button onClick={()=>setPrint(true)}> Wheat bg </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateWHEAT_BG}/>
        <div className= "divider"></div>
        <button onClick={()=>setPrint(true)}> Wheat ug </button>
        <div className= "dividerSmall"></div>
        <input type="text" onChange= {updateWHEAT_UG}/>
        <br></br>
      </div>
      </div>

<br></br>

  <div>
<div id= "center"><p>Description: </p></div>    

  <div className="textD">
  Here you can visualize your evaluations from Detection as a dashboard. <br></br>
    To do this, enter the number of the specific broken grain type at bg <b>(bg: broken grain)</b>
    and the number of the specific unbroken grain type at ug <b>(ug: unbroken grain)</b>. <br></br>
    In order to include the value in the dashboard, you must press the corresponding button.
  </div>
  </div>




<br></br>
<br></br>

	{/*<form onSubmit={onSubmit}>
		<input type ="file" onChange={onFileChange}/>
		<input type ="text" name ="username" placeholder="NAME"/>
		<button>Submit</button>
	</form>
    */}
	</div>
	</div>
  <Footer />
  </>
	
	);
	}


export default Add;
