import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";  


function Form(){
    <Form class="ui form">
    <div class="field">
      <label>User Name</label>
      <Field type="text" name= "user-name"/>
    </div>
    <div class="field">
      <label>Password</label>
      <Field type="text" name="password"/>
    </div>
    <div class="field">
      <div class="ui checkbox">
        <Field type="checkbox" tabindex="0" class="hidden"/>
        <label>I agree to the Terms and Conditions</label>
      </div>
    </div>
    <button class="ui button" type="submit">Submit</button>
  </Form>
}  

