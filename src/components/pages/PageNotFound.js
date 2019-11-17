import React from 'react';
import {Container, Text, BackLink} from '../common/pageStyle';

const PageNotFound = () => {
    return (
        <Container>
            <BackLink to='/'>{'< back'}</BackLink>
            <Text>404</Text>
        </Container>
    )
};

export default PageNotFound;