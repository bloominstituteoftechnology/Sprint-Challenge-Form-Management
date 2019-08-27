import React from 'react';
import FormikUserForm from './components/Form.js'
import axios from 'axios';
import Data from './components/Data.js'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/restricted/data')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err.response));

  }


  render(){
    console.log(this.state.data)
    return (
      <div className="App">
        <FormikUserForm /> 
        <Data data={this.state.data} />
      </div>
    )
  }
}

export default App;