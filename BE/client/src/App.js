import React from 'react';
import RegisterForm from './forms/RegForm';
import Recipe from './components/Recipe';

import { Route } from "react-router-dom";
import { PrivateRoute } from './utils/PrivateRoute';

import './styles.css';

// Route is publicly accessible. PrivateRoute is only accessible with a token. 
// We are passing components to Route and PrivateRoute to define what is rendered
// at those paths. If we don't have component with Route, it won't display those components.

function App() {

  return (
    <div className='container'>
      <Route exact path="/" component={RegisterForm} />
      <PrivateRoute path="/Recipe" component={Recipe} />
    </div>
  );
}

export default App;
