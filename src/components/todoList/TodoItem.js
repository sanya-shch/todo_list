import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuthSelector} from '../../selectors';

const TodoItem = ({isAuthenticated, todo: {email, id, status, text, username}}) => {
    return (
        <div>
            <h2>
                {username}
            </h2>
            <h2>
                {email}
            </h2>
            <p>
                {status}
            </p>
            <p>
                {id}
            </p>
            <h4>
                {text}
            </h4>
            {
                isAuthenticated && <Link to={`/edit/${id}`} >Edit</Link>
            }
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthSelector(state)
});

export default connect(
    mapStateToProps
)(TodoItem);