import React from "react";
import "./App.css";
import SprintForm from "./components/SprintForm";
import DataFetch from "./components/DataFetch";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Sprint John!!!!!</h1>
        <SprintForm />
        <DataFetch />
      </div>
    );
  }
}

export default App;
