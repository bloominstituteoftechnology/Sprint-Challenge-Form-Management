import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent, getByTestId, waitForDomChange, act} from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"

describe('<App />', () => {
  it('renders without crashing', async () => {
    const div = document.createElement('div');
    await act(async () => {
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    }) 
  });

  // test('Should display Brisket', async () => {
  //   await act(async () => {
  //     display = render(<Display />)
  //     display.getByText(/brisket/i)
  //   })
  //   waitForDomChange ({display})
  //   .then(() => 
  //   .catch(error => console.log(error))
    
  // })
})