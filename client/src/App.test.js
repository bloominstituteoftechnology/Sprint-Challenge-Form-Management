import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}),
it('contains a div with data-testid=something', () => {
  const wrapper = rtl.render(<App/>);
  wrapper.findAllByTestId('something');
}),
it('works when clicked', () => {
  const wrapper = rtl.render(<App/>);
  const button = wrapper.getByText(/submit!/i);
  rtl.fireEvent.click(button);
})

