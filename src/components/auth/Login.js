import React from 'react';
import LoginForm from './LoginForm';
import {connect} from "react-redux";
import {logIn} from "../../actions";
import {Container, Text, BackLink} from '../common/pageStyle';

const Login = ({logIn}) => {
    const showResults = (values) => {
        logIn(values);
    };

    return (
        <Container>
            <Text>Login</Text>
            <BackLink to='/'>{'< back'}</BackLink>
            <LoginForm onSubmit={showResults} />
        </Container>
    )
};

export default connect(
    null,
    { logIn }
)(Login);