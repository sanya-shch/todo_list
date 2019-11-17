import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
    border: 1px solid #b9b9b9;
    display: flex;
    flex-direction: column;
    // align-items: center;
    margin: 2rem;
    padding: 2rem;
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
    width: 60vw;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 1;
    width: 100%;
    margin-bottom: 1rem;
`;

export const Username = styled.h3`
    width: 35%;
`;

export const Status = styled.h3`
    width: 10%;
`;

export const Email = styled.h4`
    width: 55%;
`;

export const Text = styled.div`
    
`;

export const EditLink = styled(Link)`
    margin-top: 1rem;
`;
