import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

new class FormComponent extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <Form>
                <Field type="text" name="username" placeholder="Username" />
                <Field type="password" name="password" placeholder="Password" />
                <button>Submit!</button>
            </Form>
        )
    }
}
const FormikForm = withFormik({

    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
          .email()
          .required('if you dont enter your email, we cant spam you, sooooo... required field.'),
        password: Yup.string()
          .min(8, 'your password is too short, try eight characters or more')
          .required('did you forget to enter a password?')
      }),
  
    handleSubmit(values) {
      console.log(values)
     
    }
  
})(FormComponent);

export default FormikForm;