import styled from 'styled-components'; 

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: white;
`;

export const Item = styled.li`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
`;

export const DeleteButton = styled.button`
    background-color: darkcyan;
    padding: 5px;
    color: white;
    border: none;
    transition: transform 300ms ease-in-out;
    &:hover { 
        transform: scale(1.1);
    }
`