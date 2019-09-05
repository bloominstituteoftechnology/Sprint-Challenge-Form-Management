import React from 'react';
import './App.css';
import LoginForm from "./form.js";


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      infoArray: [],
      status: false,
    }
  }

  render(){
    return(
      <div>
        <h1>Welcome!</h1>
        <LoginForm/>

      </div>
    )
  }
}


export default App;
