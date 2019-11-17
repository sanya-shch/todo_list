import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {getIsAuthSelector, getLoadingSelector} from "../../selectors";

const PrivateRoute = ({ isAuthenticated, loading, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated && !loading ? (
                    <Redirect to='/login' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

const mapStateToProps = state => ({
    loading: getLoadingSelector(state),
    isAuthenticated: getIsAuthSelector(state)
});

export default connect(
    mapStateToProps
)(PrivateRoute);