import styled from "styled-components";

export const FieldContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 1rem;
    label {
        justify-self: end;
    }
    :nth-child(1) {
        margin-top: 20vh;
    }
    :nth-child(4) {
        margin-bottom: 10vh;
    }
`;