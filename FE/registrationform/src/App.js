import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from "./Components/SecretData/PrivateRoute"

import Login from './Components/Login/Login'

import Home from './Components/LandingPage/Home'
function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('test')
  }, [token]);

  console.log('Token u there brother?: ', token);

  return (
    <div >
      <header >
        <h1>React app</h1>
        <Link  to='/'>
          LandingPage
        </Link>
        {token === null ? (
          <Link to='/login'>
            Login
          </Link>
        ) : (
          <Link to='/login'>
            <button onClick={() => {
              localStorage.removeItem('token')
              setToken()}} >
              Logout
            </button>
          </Link>
        )}
      </header>
      <div>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
      </div>
    </div>
  );
}

export default App;

