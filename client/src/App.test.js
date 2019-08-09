import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { add } from './Comps/Card'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('card.js',  () => {
    
    describe('add()', () => {
        it('should return the sum of numbers passed in', () => {
            //expect
            expect(add(2, 3)).toBe(5);
            expect(add(8)).toBe(8);
        })
    })

    
});

