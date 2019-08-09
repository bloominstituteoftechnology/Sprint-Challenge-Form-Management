import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, status}) {
    const [users, setUsers] = useState([]);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        // status sometimes comes through as undefined
        if (status) {
            axios
                .get("http://localhost:5000/api/restricted/data")
                .then(res => setUsers(res.data));

            setLogin(true);
          
        }
    }, [status]);

    if(login === false){
        return (
            <Form>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type="username" name="username" placeholder="usernam" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <button>Submit!</button>
            </Form>
        );

    }else{
        console.log("succeasfully entered")
        return(
            <div>
                <h1>hi</h1>
                {users.map(user =>(
                <div>
                    <h1>Recipes</h1>
                    <h3>{user.name}</h3>
                    <p>{user.course}</p>
                    <p>{user.main}</p>
                    <p>{user.technique}</p>
                    <div><p>Ingredients: </p>{user.ingredients.map(ing =>(<p>{ing}</p>))}</div>
                </div>
            ))}
            </div>
        )
    }
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values,{resetForm, setSubmitting, setStatus}) {
    console.log(values);
    axios
        .post("http://localhost:5000/api/register", values)
        .then(res => {
        console.log(res);
        setStatus(res.data)// Data was created successfully and logs to console
        resetForm();
        setSubmitting(false);
        })
        .catch(err => {
        console.log(err.response); // There was an error creating the data and logs to console
        setSubmitting(false);
        });
          
  }
})(LoginForm);

export default FormikLoginForm;
