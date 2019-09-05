import React from 'react';
import './App.css';

import FormikAppForm from './Comps/Form'
import Card from './Comps/Card'

class AppComponent extends React.Component {
  render() {
  return (
    <div className="App">
      <FormikAppForm />
      <Card />
    </div>
  );
}
}

export default AppComponent;
