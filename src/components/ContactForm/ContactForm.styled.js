import styled from 'styled-components'; 

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: white;
    margin-bottom: 50px; 
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`

export const Input = styled.input`
    border: 1px solid darkgray;
    padding: 5px;
`
export const Button = styled.button`
    width: 100%;
    background-color: darkcyan;
    padding: 10px;
    color: white;
    border: none;
    transition: transform 300ms ease-in-out;
    &:hover { 
        transform: scale(1.1);
    }
`