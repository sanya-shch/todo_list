import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';
import {connect} from "react-redux";
import {logIn} from "../../actions";

const Login = ({logIn}) => {
    const showResults = (values) => {
        logIn(values);
    };

    return (
        <div>
            <Link to='/'>{'< back'}</Link>
            <h1>Login</h1>
            <LoginForm onSubmit={showResults} />
        </div>
    )
};

export default connect(
    null,
    { logIn }
)(Login);