import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import './styles.css';


// The BrowserRouter hooks into the browser history API so that
// we can change routes programmatically. App is child component
// of router because it needs to inherit props from the router -->
// so it's injecting props into the App so we can do things like 
// props.history.push('route').

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);
