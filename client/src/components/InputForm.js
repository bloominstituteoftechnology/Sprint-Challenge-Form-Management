import React, { useEffect } from 'react'
import { Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const InputForm = ({ values, errors, touched, status, setFoods }) => {
// class TheForm extends React.Component {

    useEffect(()=> {
        if (status) {
            axios.get('http://localhost:5000/api/restricted/data')
            .then(res => {
                console.log('GET Success', res)
                setFoods(res.data)
            })
            .catch(err => console.log('GET Fail', err))
        }
    }, [status])

    // componentDidUpdate(prevProps, prevState) {
    //     if ((this.props.status !==null)){
    //         this.props.setUsers(...this.props.users, this.props.status)
    //     }
    // }

    // render () {
        // const { values, errors, touched } = this.props
        
        return (
            <Form>
                <Field type='text' name='username' placeholder='Your name'/>
                {touched.username && errors.username && <p>{errors.username}</p>}

                <Field type='password' name='password' placeholder='Password' />
                {touched.password && errors.password && <p>{errors.password}</p>}

                <button type='submit'>Submit</button>
            </Form>
        )
    // }
}

const FormikForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: yup.object().shape({
        username: yup
            .string()
            .required('*Name is required'),
        password: yup
            .string()
            .min(6, '*Password must be 6 characters or longer')
            .required('*Password is required'),
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
        // fetch('http://localhost:5000/api/register', values)
        axios.post('http://localhost:5000/api/register', values)
        .then(res => {
            console.log('POST Success', res)
            setStatus(res.data)
            resetForm()
            setSubmitting(false)
        })
        .catch(err => {
            console.log('POST Fail', err)
            setSubmitting(false)
        })
    }
})(InputForm)

export default FormikForm