import React from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
    
class UserForm extends React.Component {
   
    render() {
        return(
            <div>
                <Form>
                    <Field className='user-input' type='text' name='username' placeholder='Please enter your name' />
                    <Field className='user-input' type='password' name='password' placeholder='Password' />
                    <button className='btn' type='submit'>Submit</button>
                </Form>
            </div>
        );
    }
}
const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
       return {
        username: username || '',
        password: password || ''
       }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('You must enter a name').max(50, "Our database can't handle such an amazing name"),
        password: Yup.string().required('You must enter a password').min(5, 'You must enter a password at least 5 characters long')
    }),

    handleSubmit(values, {status, setStatus, resetForm}) {
        console.log("form submitted", values);
        axios.post(`http://localhost:5000/api/register`, values)
        .then(res => {
            console.log('response', res.data.token)
            setStatus(res.data.token)
            // console.log(status)
            resetForm();
        })
        .catch(error => {
            console.log('Post Error', error)
        })
    }

})(UserForm)
export default FormikUserForm;