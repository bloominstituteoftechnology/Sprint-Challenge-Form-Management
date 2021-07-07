import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';
import { getData } from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});