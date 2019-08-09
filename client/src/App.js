import React from "react";
import Form from "./Form";
import "./App.css";

const users = [
  {
    username: "apatelthompson",
    id: "1",
    password: "123456",
    terms: true,
    location: "USA"
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users
    };
  }

  addUser = user => {
    const newUser = {
      username: user.username,
      id: Date.now(),
      password: user.password
    };
    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to our Site!</h1>
        <h3>Please sign up here:</h3>
        <Form addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
