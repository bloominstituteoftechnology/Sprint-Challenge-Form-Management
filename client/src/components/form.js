import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function FormM({ values, errors, touched, isSubmitting, status }) {
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);

    return (
        <div className="login-form">
            <h1>{values.text}</h1>
            <Form>
                <div>
                    <Field type="username" name="username" placeholder="Username" />
                    {touched.username && errors.username && (
                        <p className="error" data-testid='error'>{errors.username}</p>
                    )}
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p className="error" data-testid='error'>{errors.password}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} title='submit'>Submit</button>
            </Form>
            {users.map(user => {
                return (
                    <div>
                        <h1 key={user.username}>{user.username}</h1>
                        <p>{user.password}</p>
                    </div>
                )
            }

            )}
        </div>
    );
}

function createFormikForm(url, reactComponent, text) {
    return withFormik({
        mapPropsToValues({ username, password, text }) {
            return {
                username: username || "",
                password: password || "",
                text: text || 'Form'
            };
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .min(6, "Must Be Atleast 6 Characters!")
                .max(24, "24 Max Characters")
                .required("Username is required"),
            password: Yup.string()
                .min(8, "Password must be 8 characters or longer")
                .required("Password is required")
        }),
        handleSubmit(values, { props, setStatus, resetForm, setErrors, setSubmitting }) {
            if (values.username === "scottBeeker") {
                setErrors({ username: "That username is already taken." });
            } else {
                axios
                    .post(url, values)
                    .then(res => {
                        // console.log(res);
                        setStatus(res.data)
                        props.setToken(res.data.token);

                        resetForm();
                        setSubmitting(false);
                    })
                    .then(props.history.push('/display'))
                    .catch(err => {
                        // console.log(err);
                        setSubmitting(false);
                    });
            }
        }
    })(reactComponent);
}

export const FormikRegisterForm = createFormikForm("http://localhost:5000/api/register", FormM, 'Register Form');
export const FormikLoginForm = createFormikForm("http://localhost:5000/api/login", FormM, 'Login Form');