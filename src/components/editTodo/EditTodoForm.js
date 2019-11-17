import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";
import validate from "./validateEditTodoForm";
import renderField from "../common/renderField";
import {getInitialValuesForEditFormSelector} from '../../selectors';

const EditTodoForm = ({ handleSubmit, pristine, reset, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="text" type="text" component={renderField} label="Text" />
            <Field name="status" type="checkbox" component={renderField} label="Status" />
            <div>
                <button type="submit" disabled={submitting}>Save</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
};

const mapStateToProps = (state, props) => ({
    initialValues: getInitialValuesForEditFormSelector(state, props.id)
});

export default connect(mapStateToProps)(reduxForm({
    form: 'editTodoForm',
    validate
})(EditTodoForm));