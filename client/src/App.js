import React from "react";
import Form from "./Form";
import UserList from "./UserList";
import axios from "axios";
import "./App.css";

// const users = [
//   {
//     username: "apatelthompson",
//     id: "1",
//     password: "123456",
//     terms: true,
//     location: "USA"
//   }
// ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  getData = response => {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(user => {
        console.log(user);
        this.setState({ users: user });
      })
      .catch(err => console.log("error"));
  };

  addUser = user => {
    const newUser = {
      username: user.username,
      id: Date.now(),
      password: user.password
    };
    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    console.log("data", this.state.data);
    return (
      <div className="App">
        <h1>Welcome to our Site!</h1>
        <h3>Please sign up here:</h3>
        <Form addUser={this.addUser} />
        <UserList dataProp={this.state.users} />
      </div>
    );
  }
}

export default App;
