import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    margin: 1rem;
    padding: 1rem;
    font-size: 30px;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    position: absolute;
    left: 10vw;
    top: 10vh;
`;

export const AddLink = styled(Link)`
    text-decoration: none;
`;
