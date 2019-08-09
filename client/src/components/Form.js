import React, { useEffect } from 'react';
import { withFormik, Form as FormikForm, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import styled from 'styled-components';



 const Form = ({ errors, touched, status, updateUser, values }) => {
  useEffect(() => {
    if (status) {
      updateUser(status);
    }
  }, [status]);

   return (
    <Uform>
      <h1>User Form</h1>
      <FormikForm className='user-form'>
        <label>
          Name:
          <Field type='text' name='name' />
          {touched.name && errors.name && (
            <p className='error'>{errors.name}</p>
          )}
        </label>
        <label>
          Password: 
          <Field type='password' name='password' />
          {touched.password && errors.password && (
            <p className='error'>{errors.password}</p>
          )}
        </label>
        <button type='submit' className='user-form-submit'>
          Submit
        </button>
      </FormikForm>
    </Uform>
  );
};

 const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || '',
      password: values.password || ''
    };
  },


  //Yup, Validation

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .lowercase()
      .required('Name is a required field'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Please choose a password'),
  }),
  
  handleSubmit(values, { setStatus, resetForm }) {
    axios.post('http://localhost:5000/api/register', values).then(res => {
      console.log('POST res: ', res);
      setStatus(res.data);
      resetForm();
    });
  },
})(Form);

 export default FormikUserForm;

 const Uform = styled.form`
 @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
 border: 1px solid white;
 font-family: 'Raleway', sans-serif;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 500px;
 margin: 0 auto;
 height: 500px;
 font-size: 1.5rem;
 margin-top: 10%;

 .user-form{
     display: flex;
     flex-direction: column;
 }

 .user-form-submit{
     width: 100px;
     margin: 0 auto;
     margin-top: 10px;
     font-family: 'Raleway', sans-serif;
     height: 45px;
     border: none;
     border-radius: 1%;
     background-color: white;
 }
 label{
    margin: 5px;
 }
 h1{
     color: white;
 }
 input{
     border: none;
     border-radius: 1%;
     margin-top: 10px;
     height: 2rem;
     width: 220px;
     display: flex;
 }
 `