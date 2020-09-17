import styled from 'styled-components';

export const SNS = styled.ul`
    display: flex;
    list-style: none;
    font-size: 25px;
    color: #fff;

    li {
        color: #fff;
    }

    li:not(:last-child) {
        margin-right: 30px;
    }
`