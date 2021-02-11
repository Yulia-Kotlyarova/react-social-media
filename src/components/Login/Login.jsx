import React from 'react';
import { Form, Field } from 'react-final-form';
import { requiredField, minValue, composeValidators } from './validators.js';
import { passwordField, userName } from './fields.js';
import '../../style/Forms.css';
import '../../style/App.css';

const LoginForm = (props) => {
    const onSubmitLogIn = (formData) => {
        // logInAPI(formData);
        console.log(formData);
      }
      return (
        <Form onSubmit={ onSubmitLogIn }>
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form className = "" onSubmit = { handleSubmit }>
              <Field name="username" validate={requiredField}>
                { userName }
              </Field>
              <Field name="password" validate = {composeValidators(requiredField, minValue(6))}>
                { passwordField }
              </Field>
              <button 
                className = "send-btn" 
                type="submit" 
                disabled={submitting || !values.username || !values.password }>
                  Log In
              </button>
            </form>
          )}
        </Form>
      )
}

export default LoginForm;
