import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";
import { FormikRegisterForm }  from './form';
import '@testing-library/jest-dom/extend-expect';

function setToken(token) {

}

describe('forms should work', () => {
    test('form with empty data should have errors', () => {
        const form = render(<FormikRegisterForm setToken={setToken} />);
        const submit = form.getByTitle('submit');

        fireEvent.click(submit);

        const psPromise = form.findAllByTestId('error');
        const ps = wait(psPromise);
        console.log(ps);
    })
}) 