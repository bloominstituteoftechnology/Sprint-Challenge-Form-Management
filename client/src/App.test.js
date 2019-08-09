import React from 'react';
import {Router} from 'react-router-dom'
import {Renderer} from 'react-dom'
import App from './App';
import {render, fireEvent, cleanup} from '@testing-library/react';
import { createMemoryHistory } from 'history'
import mockAxios from 'axios'


afterEach(cleanup)
// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

it('submits the form', async () => {
  // Arrange
  const {getByPlaceholderText, getByText} = renderWithRouter(<App />)
  const userInput = getByPlaceholderText('UserName');
  userInput.nodeValue = "bharti"
  const userPassword = getByPlaceholderText('Password');
  userInput.nodeValue = "password"

  mockAxios.post.mockImplementationOnce(() =>
  Promise.resolve({
    data: { results: {message:"user registered successfully"} }
  })
);
  // Act
  const leftClick = { button: 0 }
  fireEvent.click(getByText("Submit"), leftClick );

  // Assert
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
})