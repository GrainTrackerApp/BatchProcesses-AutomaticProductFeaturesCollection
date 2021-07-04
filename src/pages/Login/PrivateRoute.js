import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../../Firebase/Auth";


const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
        return (
            <Route
                {...rest}
                render={routeProps =>
                // Wenn wir user haben, dann render unsere RouteComponent, sonder 
                // rendern wir Redirect, welches uns zum login path führt.
                !!currentUser ? (
                <RouteComponent {...routeProps} />
                ) : (
                 <Redirect to={"/login"} />
                  )
                  } 
            />
        );
    };
  
export default PrivateRoute