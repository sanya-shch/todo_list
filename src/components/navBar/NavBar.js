import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../actions";
import {getIsAuthSelector} from "../../selectors";
import {Nav} from './navbarStyle';

const NavBar = ({logOut, isAuthenticated}) => {
    const clickLogout = () => logOut();

    return (
        <Nav>
            <div>
                {
                isAuthenticated
                    ? <Link to='/login' onClick={clickLogout}>Logout</Link>
                    : <Link to='/login'>Login</Link>
                }
            </div>
        </Nav>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: getIsAuthSelector(state)
});

export default connect(
    mapStateToProps,
    { logOut }
)(NavBar);