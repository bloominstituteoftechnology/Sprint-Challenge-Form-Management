import React from 'react'
import ReactDom from 'react-dom'
import { add } from './Card'

describe('Data from API', () => {
    it('renders the POST objects', () => {
        expect(add(2, 3)).toBe(5);
    });
})


