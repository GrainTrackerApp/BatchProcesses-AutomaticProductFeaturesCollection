import React, {useCallback, useContext} from "react";
import { withRouter, Redirect} from "react-router";
import app from "../../Firebase/firebase-config";
import {AuthContext} from "../../Firebase/Auth.js";
import './login.css';


const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser){
        return <Redirect to="/" />;
    }


    return (
        <div class="container">
            <div class="center">
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <div class="form">
                <label class="label">
                    Email
                </label>                    
                <input name="email" type="email" placeholder="Email" />
                <br></br><br></br>
                <label class="label">
                    password
                </label>
                <input name="password" type="password" placeholder="Password"/>
                </div>
                <button type="submit">Log in</button>
           </form>
           </div>
        </div>
    );
};



export default withRouter(Login);