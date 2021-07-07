import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
function RegistrationForm({ errors, touched }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="username" name="username" placeholder="username" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button>Submit!</button>
    </Form>
  );
}

const FormikRegistrationForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
      
    };
  },

  // validationSchema: Yup.object().shape({
  //   username: Yup.string()
  //     .username("Username not valid")
  //     .required("Username is required"),
  //   password: Yup.string()
  //     .min(6, "Password must be 6 characters or longer")
  //     .required("Password is required")
  // }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.username === "alreadytaken@atb.dev") {
      setErrors({ username: "That email is already taken" });
    } else {
      const sentData = { data: "Hello World!" };
      axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }

})(RegistrationForm);

export default FormikRegistrationForm;