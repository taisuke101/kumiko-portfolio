import React from 'react'
import BackgorundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

import { ImageContainer } from './background.styles';

const query = graphql`
{
    file(relativePath: {eq: "bookshelf.jpg"}) {
        childImageSharp {
            fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
}
}
`

const Background = ({children, image}) => {

    const {file:{childImageSharp:{fluid}}} = useStaticQuery(query);

    return (
        <ImageContainer>
            <BackgorundImage
                Tag='div'
                fluid={image || fluid}
                className='bcg'
                preserveStackingContext={true}
            >
                {children}
            </BackgorundImage>
        </ImageContainer>
    )
}

export default Background
