import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SprintForm = ({ errors, touched }) => {
  return (
    <div className="form-container">
      <h1>Form Stuff!</h1>
      <Form>
        <label>
          UserName
          <Field type="text" name="username" placeholder="UserName" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </label>
        <label>
          Password
          <Field type="text" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </label>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikSprintForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Last Name First"),
    password: Yup.string().required("must submit to requirements")
  }),

  handleSubmit() {
    axios
      .post("http://localhost:5000/api/register")
      .then(res => {
        console.log("test 12:", res.data);
      })
      .catch(err => console.error(err.response));
  }
})(SprintForm);

export default FormikSprintForm;
