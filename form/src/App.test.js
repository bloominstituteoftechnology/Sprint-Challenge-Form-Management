import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe("<App />", ()=>{

  it('renders without crashing component', ()=>{
    render(<App/>)

  })

  it('display greeting', ()=>{
    const x = render(<App/>)
    const compare = x.getAllByText(/Welcome/i)
  })
})
