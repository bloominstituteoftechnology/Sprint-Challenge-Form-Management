import React, { useState, useEffect } from 'react'
import { Form as Formik, Field, withFormik } from 'formik';
import { Segment, Form, Checkbox, Button } from 'semantic-ui-react'
import Card from './Card'
import 'semantic-ui-css/semantic.min.css'
import Axios from 'axios';
import * as Yup from 'yup'
const FormComp = props => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get(`http://localhost:5000/api/restricted/data`)
            .then(res => setUsers(res.data))
    }, []);
    return (
        <Segment raised compact>
            <Form>
                <Formik>
                    <Form.Field>
                        <Field type="text" name="username" placeholder="Username" />
                        {props.errors.username}
                    </Form.Field>
                    <Form.Field>
                        <Field type="password" name="password" placeholder="Password" />
                    </Form.Field>
                    <button type="submit">Submit</button>
                </Formik>
            </Form>
            <div>{users.map(e => {
                return (<Card data={e} />)
            })}
            </div>
        </Segment>


    )
}

const FormikForm = withFormik({
    mapPropsToValues(values) {
        return {
            username: values.username || '',
            password: values.password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('this is required'),
        password: Yup.string().required('this is required')
    }),
    handleSubmit(values, { setStatus }) {
        console.log(values)
        Axios.post('http://localhost:5000/api/register/', values)
            .then(res => alert('Account Created Successfully'))
            .catch(err => alert(err))
    }

})(FormComp);
export default FormikForm;