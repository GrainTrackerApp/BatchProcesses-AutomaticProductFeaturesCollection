import React, {useCallback} from "react";
import { withRouter, Link} from "react-router";
import app from "../../Firebase/firebase-config";
import './signup.css';
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";

// import '../../components/Navbar.js';





const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/login");
        } catch(error){
            alert(error);
        }
    }, [history]);

    


    return (
       
        
      

<>
        <Header />

<div class="container" >


        <div class="center">
   

        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
            <div class="form">
                <label class="label">
                    Email
                   
                    </label>
                    <input name="email" type="email" placeholder="Email" />
                    <br></br><br></br>
                    <label class="label">
                    Password
                    
                </label>
                <input name ="password" type="password" placeholder="Password" />
                
                </div>
                
              
                <button type ="submit">Sign Up</button> <br></br><br></br>
               
               
               
                </form>
                <div class="return"></div>
                <button onClick={() => history.goBack()}>Return</button>

              

        </div>

        </div>
    </div>
   </> );
 };

export default withRouter(SignUp);