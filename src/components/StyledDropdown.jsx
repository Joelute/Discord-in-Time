import styled from "styled-components";

const StyledSelect = styled.select`
    width: 10em;
    background: #202326;
    color: #B3B5BD;
    font-size: 1.3rem;
    padding:.4em;
    border-radius: 10px;
    border: 0;
    outline: none;

    option {
        background-color: #2C2F33;
        outline: none;
    }

    option:hover {
        background-color: #393D41;
    }


`



export {StyledSelect}