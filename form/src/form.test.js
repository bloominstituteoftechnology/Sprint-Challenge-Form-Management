import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './form';
import {render} from '@testing-library/react';


describe("<App />", ()=>{

  it('renders without crashing component', ()=>{
    const form = render(<LoginForm/>)

  })
})
