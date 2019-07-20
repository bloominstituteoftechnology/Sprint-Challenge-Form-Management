import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// Checks if user is authenticated. If yes, renders 'component' prop.
// If no, redirects to '/' (regform component).

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to='/' />
            )
        }
    />
);