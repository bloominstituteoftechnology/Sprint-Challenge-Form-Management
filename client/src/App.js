import React from 'react';
import axios from 'axios';
import './App.css';
import FormikRegistrationForm from './RegistrationForm';
import './UserInfo';
import UserInfo from './UserInfo';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userData: []
    }
  }
  componentDidMount(){
    axios.get("http://localhost:5000/api/restricted/data")
    .then(res =>{
        this.setState({
          userData: res.data
        })
    })
    .catch(err =>{
      console.log("Not working, sorry!")
    })
  }
  render(){
    console.log(this.state.userData)
  return (
    <div className="App">
    <FormikRegistrationForm/>
    <UserInfo userData={this.state.userData}/>
    </div>
  );
}
}
export default App;
