import React, { Component } from 'react'
import { withFormik, Field, Form } from 'formik'
import axios from 'axios'

class Formack extends Component {

    render() {

        return (
            <Form>
                <label>
                    Username:
                    <Field type='text' name='password' />
                </label>
                <label>
                    Password:
                    <Field type='password' name='username' />
                </label>
                <button type='submit'>Submit</button>
            </Form>
        )

    }

}

export default withFormik({

    mapPropsToValues({ username, password }) {

        return {
            username: username || '',
            password: password || ''
        }

    },

    handleSubmit(values) {

        axios.post('http://localhost:5000/api/register', values)
            .then(res => {
                let token = res.data.token
                axios.get('http://localhost:5000/api/restricted/data')
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }

})(Formack)
