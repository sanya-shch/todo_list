import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <Link to='/'>{'< back'}</Link>
            <h1>404</h1>
        </div>
    )
};

export default PageNotFound;