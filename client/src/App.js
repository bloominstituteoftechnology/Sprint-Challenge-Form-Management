import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Display from './components/display';
import { FormikRegisterForm } from './components/form';
import { FormikLoginForm } from './components/form';

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
    <Navbar />
      <Route exact path='/' render={(props) => <FormikRegisterForm {...props} setToken={setToken} text="Register Form" />} />
      <Route exact path='/login' render={(props) => <FormikLoginForm {...props} setToken={setToken} text="Login Form" />} />
      <Route exact path='/display' render={(props) => <Display {...props} token={token} />} />
      </div>
  );
}

export default App;