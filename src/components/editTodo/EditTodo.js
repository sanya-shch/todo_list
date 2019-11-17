import React from 'react';
import EditTodoForm from './EditTodoForm';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {editTodo} from "../../actions";
import {Container, Text, BackLink} from '../common/pageStyle';

const EditTodo = ({editTodo,...props}) => {
    const showResults = (values) => {
        values.status = values.status === true ? 1 : 0;
        editTodo(values);
    };
    const { id } = useParams();

    return (
        <Container>
            <Text>Edit</Text>
            <BackLink to='/'>{'< back'}</BackLink>
            <EditTodoForm id={id} onSubmit={showResults} />
        </Container>
    )
};

export default connect(
    null,
    { editTodo }
)(EditTodo);