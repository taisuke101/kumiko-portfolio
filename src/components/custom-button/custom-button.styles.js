import styled from 'styled-components';


export const CustomButtonStyles = styled.div`
    margin: auto;
    text-align: center;
    width: 10rem;
    background: hsl(21, 62%, 45%);
    color: hsl(21, 100%, 94%);
    padding: 0.5rem 0.75rem;
    letter-spacing: 0.1rem;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    a {
        text-decoration: none;
        color: white;
    }
    :hover {
        background: hsl(21, 65%, 59%);
        color: hsl(21, 91%, 17%);
    }
`