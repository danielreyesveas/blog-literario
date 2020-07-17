import styled from '@emotion/styled';

export const Formulario = styled.form`
    max-width: 800px;
    width: 95%;
    margin: 5rem auto 5rem auto;

    fieldset {
        margin: 1rem 0;
        border: 1px solid #e1e1e1;
        font-size: 1.2rem;
        padding: 4rem;
    }
    legend {
        text-align: right;
    }
`;

export const Campo = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    label {
        flex: 0 0 100px;
        font-size: 1rem;
    }
    input,
    textarea {
        flex: 1;
    }
    textarea {
        height: 200px;
    }
`;

export const InputSubmit = styled.input`
    background-color: transparent;
    width: 100%;
    padding: 1rem;
    text-align: center;
    border: 1px solid #e1e1e1;
    color: #393939;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        color: white;
        background-color: #a161bf;
    }
`;

export const Error = styled.p`
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;