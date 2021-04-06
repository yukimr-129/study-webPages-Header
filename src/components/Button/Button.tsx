import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Style = {
    primary?: boolean;
    big?: boolean;
}

export const Button = styled(Link)<Style>`
    background-color: ${({ primary }) => (primary ? 'black' : 'gray')};
    white-space: none;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#0001a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
    }
`