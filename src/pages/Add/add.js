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
    


function Add() {

  const [datas, setData] = useState(null)
  const [print, setPrint] = useState(false)
  function getData(val){
  
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
    }
  

let data = [
  {   
    name: 'Maize',
    bg: 200,
    ug: 240,

  },
  {
    name: 'Roggen',
    bg: 300,
    ug: 140,

  },
  {
    name: 'Triticale',
    bg: 200,
    ug: 180,

  },
  {
    name: 'Wheat',
    bg: 278,
    ug: 390,

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
      {
        print?
       <h1>{datas}</h1> 
        :null
      }
      <div>
      <button onClick={()=>setPrint(true)}> Maize </button>
      <input type="text" onChange= {getData}/>
      <br></br>
      <br></br>
      <button onClick={()=>setPrint(true)}> Roggen </button>
      <input type="text" onChange= {getData}/>
      <br></br>
      <br></br>
      <button onClick={()=>setPrint(true)}> Triticale </button>
      <input type="text" onChange= {getData}/>
      <br></br>
      <br></br>
      <button onClick={()=>setPrint(true)}> Wheat </button>
      <input type="text" onChange= {getData}/>
      <br></br>
      <br></br>
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
