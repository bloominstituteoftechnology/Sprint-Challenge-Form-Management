import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const AppForm = ({errors, touched, status, props  }) => {
    const [forms, setForm] = useState([]);
    console.log(forms);

  useEffect(() => {
    if (status) {
      setForm([...forms, status]);
    }
  }, [status]);

return (
    <div className="App-Form"> 
        <h1> Form </h1>
            <Form> 
                  <Field type='text' name='username' placeholder='username' />
                 {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
                )}
                  <Field type='text' name='password' placeholder='password' />
                 {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
                )}

                <button type="submit">Submit</button>

                 {forms.map(form => (
                 <p key={form.id}>
                 Username: {form.username}
                 <br/>
                 Password: {form.password}
                 </p>
                 ))}
                
            </Form>
    </div>
)
};

const FormikAppForm = withFormik({
    mapPropsToValues({ username, password}){
        return {
          username: username || "",
          password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

    handleSubmit(values, { setStatus }) {
        axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }
})(AppForm);

export default FormikAppForm
