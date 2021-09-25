import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Header"
import { CssBaseline } from "@material-ui/core"



const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
  
    <App />
  </React.StrictMode>,
  rootElement
)


reportWebVitals();
