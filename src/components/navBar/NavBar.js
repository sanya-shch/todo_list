import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../actions";
import {getIsAuthSelector} from "../../selectors";

const NavBar = ({logOut, isAuthenticated}) => {
    const clickLogout = () => logOut();

    return (
        <div>
            <Link to='/'>TodoList</Link>
            <Link to='/create'>Add</Link>
            <Link to='/404'>404</Link>

            <div>
                {
                isAuthenticated
                    ? <Link to='/login' onClick={clickLogout}>Logout</Link>
                    : <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthSelector(state)
});

export default connect(
    mapStateToProps,
    { logOut }
)(NavBar);