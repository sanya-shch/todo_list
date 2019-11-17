import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from "./validateLoginForm";
import renderField from "../common/renderField";

const LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="password" type="password" component={renderField} label="Password" />
            <div>
                <button type="submit" disabled={submitting}>Login</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm)