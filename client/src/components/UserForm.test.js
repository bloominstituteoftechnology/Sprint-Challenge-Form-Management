import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './UserForm';
import {render, fireEvent, getByTestId} from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"

describe('<UserForm />', () => {
        it('renders without crashing', async () => {
          const div = document.createElement('div');
            ReactDOM.render(<UserForm />, div);
            ReactDOM.unmountComponentAtNode(div);
        })
        it('displays a submit button', () => {
            const {container} = render(<UserForm />)
            const submit = getByTestId(container, 'submit')
            expect(submit.textContent).toBe('Submit')
        })
        // it('logs a response on click', () => {
        //     const {container} = render(<UserForm />)
        //     const submit = getByTestId(container, 'submit')
        //     fireEvent.click(submit);
        //     expect()
        // })
})