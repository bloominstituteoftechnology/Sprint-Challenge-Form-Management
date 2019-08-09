import React from 'react';
import './App.css';
import FormikUserForm from './components/Form';
import User from './components/User';
import axios from 'axios';
import styled from 'styled-components'

class App extends React.Component {
  constructor() {
    super();

     this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData()
      .then(res => this.updateData (res.data))
      .catch(err => console.log (err))
  }

  getData = () => {
    return axios.get('http://localhost:5000/api/restricted/data')
  }

   updateData = data => {
    this.setState({ data: data });
  };

   render() {
    return (
      <Dishes>
        <FormikUserForm type = 'Register' updateMessage={this.updateMessage} />
          {this.state.data.map(food => {
            return <User key = {food.name} food={food} />;
          })}
          </Dishes>
    );
  }
}

export default App;

const Dishes = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: center;
font-family: 'Raleway', sans-serif;
font-size: 1.5rem;
color: white;
`
