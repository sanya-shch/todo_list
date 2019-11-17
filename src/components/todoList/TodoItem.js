import React from 'react';
import {connect} from "react-redux";
import {getIsAuthSelector} from '../../selectors';
import {Container, InfoContainer, Username, Email, Status, Text, EditLink} from './todoItemStyle';

const TodoItem = ({isAuthenticated, todo: {email, id, status, text, username}}) => {
    return (
        <Container>
            <InfoContainer>
                <Username>{username}</Username>
                <Email>{email}</Email>
                <Status>{status}</Status>
            </InfoContainer>
            <Text>{text}</Text>
            {
                isAuthenticated && <EditLink to={`/edit/${id}`} >Edit</EditLink>
            }
        </Container>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthSelector(state)
});

export default connect(
    mapStateToProps
)(TodoItem);