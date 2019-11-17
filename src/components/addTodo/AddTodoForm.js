import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from "./validateAddTodoForm";
import renderField from "../common/renderField";

const AddTodoForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field name="text" type="text" component={renderField} label="Text" />
            <div>
                <button type="submit" disabled={submitting}>Add</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'addTodoForm',
    validate
})(AddTodoForm)