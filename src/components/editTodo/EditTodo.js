import React from 'react';
import {Link} from "react-router-dom";
import EditTodoForm from './EditTodoForm';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {editTodo} from "../../actions";

const EditTodo = ({editTodo,...props}) => {
    const showResults = (values) => {
        values.status = values.status === true ? 1 : 0;
        editTodo(values);
    };
    const { id } = useParams();

    return (
        <div>
            <Link to='/'>{'< back'}</Link>
            <h1>Edit</h1>
            <EditTodoForm id={id} onSubmit={showResults} />
        </div>
    )
};

export default connect(
    null,
    { editTodo }
)(EditTodo);