import styled from 'styled-components';

export const AboutStyles = styled.div`
    margin: 0;
    padding: 20px;
`

export const SectionCenter = styled.div`
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    grid-gap: 2rem;
    text-align: center;
    padding: 20px;
    padding-bottom: 25px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const Span = styled.span`
    font-size: 4rem;
    color: hsl(21, 62%, 45%);
    margin-bottom: 1rem;
`

export const Heading4 = styled.h4`
    text-transform: uppercase;
    font-weight: 500;
`

export const Paragraph = styled.p`
    color: hsl(209, 34%, 30%);
    max-width: 35em;
`
