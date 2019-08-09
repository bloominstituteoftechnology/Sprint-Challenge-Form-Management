import React from 'react';
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}),
it('contains a div with data-')
;
