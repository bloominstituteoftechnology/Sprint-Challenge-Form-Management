import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import styled from 'styled-components';



const MyForm = () => {

   return (
    <Uform>
      <h1>User Form</h1>
      <Formik 
        initialValues={{
            username: '',
            password: ''
        }}
        onSubmit={(values, { resetForm }) => {
            console.log('HANDLE SUBMIT')
          axios
              .post("http://localhost:5000/api/register", values)
              .then(response => {
                  console.log(response.data.message);
                  resetForm();
              })
              .catch(err => console.log('this error', err))
          }}
          validationSchema={() => Yup.object().shape({
            username: Yup.string().required('Name is a required field'),
            password: Yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Please choose a password'),
          })}
            
        render={({ errors, touched, values }) => {
            return (
                <Form className='user-form'>
                <label>
                  Name:
                  <Field type='text' name='username' />
                  {touched.username && errors.username && (
                    <p className='error'>{errors.username}</p>
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
              </Form>
            )
        }}
        />
     
    </Uform>
  );
};


 export default MyForm;

 const Uform = styled.div`
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
 margin-top: 5%;
 background-color: #A056E8;


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