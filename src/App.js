import './App.css';
import React from "react";

// #### PAGES ####

import Add from './pages/Add/add';
import AddEvaluation from './pages/AddEvaluation/addEvaluation';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Menu from "./pages/Menu/Menu";
import Projekt from "./components/projekt";
import Contact from "./components/Contact";

// #### ROUTER #### 


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AuthProvider} from "./Firebase/Auth";
import PrivateRoute from "./pages/Login/PrivateRoute";

import Header from "./components/Header"
import Navbar from './components/Navbar';



var App = () => {
  var currentUserName = ""

  

  return (
   
    <AuthProvider>

   <Router>
   <Switch>
  
     <Route path ='/menu' exact component={Menu} />
     <Route path ='/add' exact component={Add} />
     <Route path = '/add-Evaluation' component ={AddEvaluation}/>
     <Route path ='/login' exact component={Login} />
     <Route exact path="/signup" component = {SignUp} />
     <Route path ="/projekt" exact component={Projekt} />
     <Route path ="/Contact" exact component={Contact} />
     <PrivateRoute exact path="/" component = {Home} />


    
   </Switch>
   </Router>
     



    </AuthProvider>
  );
}


export default App;

  
