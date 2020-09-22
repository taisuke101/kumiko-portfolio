import React from 'react'
import Image from 'gatsby-image';
import styled from 'styled-components';

import Title from '../title/title';

import {
    PortfolioStyles,
    SectionCenter,
    Container,
    Info
} from './portfolio.styles';



const Portfolio = ({ projects: data }) => {
    const [projects, setProjects] = React.useState(data);
    return (
        <Wrapper className='section'>
            <Title title='Portfolio' />
            <div className='section-center'>
                {
                    projects.map((item) => {
                        const { id } = item;
                        const { name, type } = item.data
                        const fluid = item.data.image.localFiles[0].childImageSharp.fluid
                        return (
                            <article key={id}>
                                <div className='container'>
                                    <Image fluid={fluid} className='img' />
                                </div>
                                <div className='info'>
                                    <p>-{type}-</p>
                                    <h3>{name}</h3>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: #f1f5f8;
    .section-center {
    margin-top: 4rem;
    max-width: 1170px;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
        height: 20rem;
        border-radius: 0.25rem;
        transition: all 0.3s linear;
        width: 100%;
    }
    article {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 0.25rem;
        transition: all 0.3s linear;
    }
    article:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    .container {
        position: relative;
        overflow: hidden;
        border-radius: 0.25rem;
        background: hsl(21, 65%, 59%);
        &:hover .img {
        opacity: 0.2;
        }
        .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: all 0.3s linear;
        color:  #fff;
        text-align: center;
        p {
            margin-bottom: 0.5rem;
            color:  #fff;
            text-transform: uppercase;
        }
        }
        &:hover .info {
        opacity: 1;
        }
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
    }
    a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
    }
`

export default Portfolio
