import axios from 'axios';
import './add.css';

import React, {Component} from "react";


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Maize',
    bg: 400,
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


class Add extends Component {

	state = {

	// Initial ist keine Datei ausgewählt (Upload bug fixen..)
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// State updaten
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			
<p>File Name: {this.state.selectedFile.name}</p>

			
<p>File Type: {this.state.selectedFile.type}</p>

			
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Wählen Sie eine Datei aus, bevor sie den Upload Button drücken </h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
	

		<div className="App">
			<div>
			<h2>number of broken/unbroken grains</h2>
			   <ResponsiveContainer width="50%" aspect={2}>
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
		  <Legend />
  
          <Bar dataKey="bg" fill="#8884d8" />    // bg: broken grains
          <Bar dataKey="ug" fill="#82ca9d" /> // ug: unbroken grains"
        </BarChart>

      </ResponsiveContainer>
	  
			<h1 id="Add-headline">
			Bilder hinzufügen
			</h1>
			<h3>
			Bilder zum Hochladen auswählen.
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
		</div>
	);
	}
}

export default Add;
