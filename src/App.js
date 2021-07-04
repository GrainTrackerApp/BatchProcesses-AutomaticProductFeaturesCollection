import './App.css';
import React from "react";

// #### PAGES ####

import Add from './pages/Add/add';
import AddEvaluation from './pages/AddEvaluation/addEvaluation';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

// #### ROUTER #### 


import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider} from "./Firebase/Auth";
import PrivateRoute from "./pages/Login/PrivateRoute";



const App = () => {
  
  return (
    <AuthProvider>
      <Router>
          <div> 
            <PrivateRoute exact path="/" component = {Home} />
            <Route exact path="/login" component = {Login} />
            <Route exact path="/signup" component = {SignUp} />
          </div>

        <Route path = '/add-Evaluation' component ={AddEvaluation}/>
        <Route path = '/add' component ={Add}/>

      </Router>
    </AuthProvider>
  );
}


export default App;

  
