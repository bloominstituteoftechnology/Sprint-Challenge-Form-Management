import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {useStoredLocalVal} from '../hooks/useStoredLocalVal';

export default function RegForm() {
    // Created default thing to be exported from this component module.
    // Destructure returned array from default call to useStoredLocalVal hook.
    // Sets value of token to key 'token', second member of destructured array used to 
    // set token in local storage (later)
    const [token, setToken] = useStoredLocalVal('token'); 
    if (token) {
         return <Redirect to='/Recipe' />;
    }
    // if statement says that if you have a token (signed in), you can go to /recipe.
    // otherwise, render the registration form. 

    // used Formik component instead of withFormik (wrapper function that constructs React component) 
    // because you can't use hooks outside of React component. 

    return(
        <Formik
            initialValues={{ username: '', password: ''}}
            // onSubmit - submit handler that takes values from rendered inputs username & password
            // and makes a post request to local Node.js server to authenticate user.
            onSubmit={(values, formikBag) => {
                console.log('values:', values)
                // formikBag update isSubmitting prop to indicate to user in the rendered view
                // request is still in progress
                formikBag.setSubmitting(true)
                const url ='http://localhost:5000/api/register';
                axios
                    .post(url, values)
                    .then(response => {  
                        // use setter from custom hook (declared above) to set token to local storage
                        setToken('token', response.data.token)
                        // resets form in case user logs out
                        formikBag.resetForm()
                        // re-enables submit button
                        formikBag.setSubmitting(false)
                        // redirects user to '/recipe/
                        formikBag.props.history.push('/Recipe');
                    })
                    .catch(error => {
                        // if request fails, logs error and re-enables submit button
                        console.log('error:', error)
                        formikBag.setSubmitting(false)
                    });
            }}

            // used Yup to provide rules for input validation
            validationSchema = {Yup.object().shape({
                username: Yup.string()
                    .required('Username is required.'),
                password: Yup.string()
                    .min(8, 'Password must be 8-20 characters.')
                    .max(20)
                    .required('Password is required.')
            })}

            // render function renders form (passes formikBag props)
            render = {({values, errors, touched, isSubmitting}) => (
                <Form className='form'>
                    <div className='form-group'>
                        <label className='label'>Username</label>
                        <Field
                            className='input'
                            name='username'
                            type='text'
                            autoComplete='off'
                            // maps value of username html input tag in the form of a field component
                            // to the formik value username
                            value={values.username}
                        />
                        {/*if someone touched username field & it doesn't match Yup validation then displays error in p tag*/}
                        {touched.username && errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className='form-group'>
                        <label className='label'>Password</label>
                        <Field
                            className='input'
                            name='password'
                            type='password'
                            autoComplete='off'
                            // maps value of username html input tag in the form of a field component
                            // to the formik value username
                            value={values.password}
                        />
                    </div>
                    {/*if someone touched password field & it doesn't match Yup validation then displays error in p tag*/}
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <button className='btn' type='submit' disabled={isSubmitting}>Submit &rarr;</button>
                </Form>
            )}
        >
        </Formik>
    )
}