import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/react/cleanup-after-each'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('app.js', () => {
//   it('should returnan app with 4 buttons being, balls, strike, hit, and foul. along with corresponding visuals above those buttons to show current value.', () =>{
//     expect(<App />)
//   })