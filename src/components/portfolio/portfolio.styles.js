import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 20px;
    background: #f1f5f8;
    .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    grid-gap: 0.4rem;

    .img {
        height: 20rem;
        position: relative;
        border-radius: 0.25rem;
        width: 100%;
    }
    .container {
        position: relative;
        overflow: hidden;
        border-radius: 0.25rem;
        background: hsl(21, 65%, 59%);
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
        .img {
            height: 35rem;
        }
        grid-template-columns: 1fr 1fr 1fr;
    }
    }
`
