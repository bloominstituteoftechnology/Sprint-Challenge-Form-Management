import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, status }) => {
    

    return (
        <div className="userForm">
            <h1>Welcome, again!</h1>
        </div>
    )
}

export default UserForm;