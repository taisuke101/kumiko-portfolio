import styled from 'styled-components';

export const HeroContainer = styled.section`
    a {
        background: transparent;
        border: 2px solid var(--clr-white);
        padding: 0.25rem 1rem;
        text-transform: capitalize;
        letter-spacing: 5px;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        transition: var(--transition);
    }
    a:hover {
        background: var(--clr-white);
        color: var(--clr-black);
    }
    @media (min-width: 800px) {
      /* padding: 0 1rem; */
        a {
            font-size: 1.25rem;
            padding: 0.5rem 1.25rem;
        }
    }
`

export const CatchCopy = styled.article`
    position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto auto 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: #fff;
    text-shadow: 0 0 20px rgba(0,0,0,0.5);
`

export const Heading3 = styled.h3`
    font-size: 80px;
    font-weight: 400;
    font-family: "Caveat", cursive;
`

export const Heading1 = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.25;
    margin: 2rem 0 3rem 0;
    letter-spacing: 3px;

    @media (min-width: 800px) {
        letter-spacing: 5px;
    }
`