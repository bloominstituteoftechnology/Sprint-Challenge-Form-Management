import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        if (status) {
          setUsers([...users, status]);
        }
      }, [status]);

    return (
        <div className="userForm">
            <h1>Welcome, again!</h1>
            <Form>

                <Field type="text" name="username" placeholder="Enter Username"/>
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}

                <Field type="password" name="password" placeholder="Enter Secure Password"/>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}

                <button type="submit">Submit!</button>

            </Form>
        </div>
    )
}


const FormikUserForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
      },
      validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter a username'),
        password: Yup.string().required('Please enter a password')
      }),

      handleSubmit(values, { setStatus }) {
        axios
          .post('http://localhost:5000/api/register', values)
          .then(res => {
            setStatus(res.data);
          })
          .catch(err => console.log(err.response));
      },
    //   handleSubmit(values, { setStatus }) {
    //     axios
    //       .post('http://localhost:5000/api/restricted/data', values)
    //       .then(res => {
    //         setStatus(res.data);
    //       })
    //       .catch(err => console.log(err.response));
    //     }


})(UserForm);

export default FormikUserForm;