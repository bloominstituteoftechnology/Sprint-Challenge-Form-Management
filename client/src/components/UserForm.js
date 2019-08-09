import React from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
    
class UserForm extends React.Component {
    // constructor() {
    //     super();
        
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if(!prevProps) {}
    // }
    render() {
        // console.log(this.props.status)
        return(
            <div>
                {/* <p>{this.props.status}</p> */}
                <Form>
                    <Field data-testid="username"  className='user-input' type='text' name='username' placeholder='Please enter your name' />
                    <Field data-testid="password" className='user-input' type='password' name='password' placeholder='Password' />
                    <button data-testid="submit" className='btn' type='submit'>Submit</button>
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
            console.log('response', res.data)
            setStatus(res.data)
            // console.log(status)
            resetForm();
        })
        .catch(error => {
            console.log('Post Error', error)
            setStatus(error.message)
        })
    }

})(UserForm)
export default FormikUserForm;