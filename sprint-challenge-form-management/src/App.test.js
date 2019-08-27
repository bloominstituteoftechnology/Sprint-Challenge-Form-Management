import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

import 'jest-dom/extend-expect';
import'@testing-library/react/cleanup-after-each';

describe ('App.js file', () => {
    it('App renders without crashing', () => {
        render(<App />);
    });
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
