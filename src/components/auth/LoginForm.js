import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from "./validateLoginForm";
import renderField from "../common/renderField";
import {Container, Btn} from '../common/formStyle';

const LoginForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="password" type="password" component={renderField} label="Password" />
            <Container>
                <Btn type="submit" disabled={submitting}>Login</Btn>
                <Btn type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Btn>
            </Container>
        </form>
    )
};

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm)