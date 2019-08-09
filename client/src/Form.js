import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function RegForm({ values, errors, touched }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="text" name="username" placeholder="Username*" />
      </div>
      <div>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="Password*" />
      </div>
      <div className="home">
        <h3>Where do you live?</h3>
        <Field component="select" name="home">
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="international">International</option>
        </Field>
      </div>
      <label>
        <Field
          className="terms"
          type="checkbox"
          name="terms"
          checked={values.terms}
        />
        Terms of Service*
      </label>
      <h4>* fields are required</h4>
      <button type="submit">Submit</button>
    </Form>
  );
}

const FormikRegForm = withFormik({
  mapPropsToValues({ username, password, terms, home }) {
    return {
      username: username || "",
      password: password || "",
      terms: terms || false,
      home: home || "usa"
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password needs to be longer than 6 characters.")
      .required("Password is required"),
    terms: Yup.bool().required("Agreeing to Terms is required")
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    console.log(values);
    axios
      .post("http://localhost:5000/api/register", values)
      .then(response => {
        console.log(response.data);
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(RegForm);

export default FormikRegForm;
