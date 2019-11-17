import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from "./validateAddTodoForm";
import renderField from "../common/renderField";
import {Container, Btn} from '../common/formStyle';

const AddTodoForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field name="text" type="text" component={renderField} label="Text" />
            <Container>
                <Btn type="submit" disabled={submitting}>Add</Btn>
                <Btn type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Btn>
            </Container>
        </form>
    )
};

export default reduxForm({
    form: 'addTodoForm',
    validate
})(AddTodoForm)