import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent, getByTestId, waitForDomChange, act} from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import DisplayFood from './components/DisplayFood';

describe('<App />', () => {
  it('renders without crashing', async () => {
    const div = document.createElement('div');
    await act(async () => {
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    }) 
  });
  it("food button displays brisket on page", async () => {
    const { container } = render(<App />);
    const foodButton = getByTestId(container, "food-button");
    await act(async () => {
      fireEvent.click(foodButton);
      await waitForDomChange(() => {
        const display = render(<DisplayFood />);
        const brisketText = display.queryByText(/brisket/i)
        expect(brisketText).toBeInTheDocument();
      })
    })
  })
  // test('Should display Brisket', async () => {
  //   await act(async () => {
  //     display = render(<Display />)a
  //     display.getByText(/brisket/i)
  //   })
  //   waitForDomChange ({display})
  //   .then(() => 
  //   .catch(error => console.log(error))
  // })
})