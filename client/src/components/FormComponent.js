import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';


class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Form>
                <Field type="text" name="email" placeholder="email" />
                {this.props.touched.email && this.props.errors.email && <p>{this.props.errors.email}</p>}

                <Field type="password" name="password" placeholder="Password" />
                {this.props.touched.password && this.props.errors.password && <p>{this.props.errors.password}</p>}
                <button type="submit">Submit!</button>
            </Form>
        )
    }
}
const FormikForm = withFormik({

    mapPropsToValues({ email, password }) {
        return {
            email: email || "",
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
        // axios
        //     .post("http://localhost:5000/api/register", values)
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        axios
            .get("http://localhost:5000/api/restricted/data")
            .then(res => {
                console.log(res.data);
                this.setState(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

})(FormComponent);

export default FormikForm;