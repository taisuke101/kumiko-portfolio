import styled from 'styled-components';

export const PortfolioStyles = styled.div`
    background: var(--clr-grey-10);
    a {
        display: block;
        width: 9rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 3rem;
    }
`

export const SectionCenter = styled.div`
    margin-top: 4rem;
    max-width: 300px;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    article {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 0.25rem;
        transition: all 0.3s linear;
    }
    article:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
    background: hsl(21, 65%, 59%);
    .img {
        height: 20rem;
        border-radius: 0.25rem;
        transition: all 0.3s linear;
    }
    &:hover .img {
        opacity: 0.2;
    }

    @media (min-width: 768px) {
      .img {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
`

export const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    opacity: 0;
    transition: all 0.3s linear;
    color: #fff;
    text-align: center;
    p {
        margin-bottom: 0.5rem;
        color: #fff;
        text-transform: uppercase;
    }
    &:hover{
        opacity: 1;
    }
`


