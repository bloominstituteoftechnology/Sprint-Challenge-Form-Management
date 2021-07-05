import React from "react";
import Form from "./Form";
import UserList from "./UserList";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    console.log(this.state);
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    console.log();
  }

  getData = response => {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(response => {
        console.log(response.data);
        this.setState(response.data);
      })
      .catch(err => console.log("error"));
  };

  render() {
    console.log("users", this.state.users);
    return (
      <div className="App">
        <h1>Welcome to our Site!</h1>
        <h3>Please sign up here:</h3>
        <Form />
        <UserList dataProp={this.state.users} />
      </div>
    );
  }
}

export default App;
