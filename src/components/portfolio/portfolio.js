import React from 'react'
import Image from 'gatsby-image';

import Title from '../title/title';

import { Wrapper } from './portfolio.styles';

const Portfolio = ({ projects: data }) => {
    const [projects, setProjects] = React.useState(data);
    return (
        <Wrapper>
            <Title title='Portfolio' />
            <div className='section-center'>
                {
                    projects.map((item) => {
                        const { id } = item;
                        // const { name, type } = item.data
                        const fluid = item.data.image.localFiles[0].childImageSharp.fluid
                        return (
                            <article key={id}>
                                <div className='container'>
                                    <Image fluid={fluid} className='img' />
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}


export default Portfolio
