import React from 'react'

import services from '../../constants/services';
import Title from '../title/title';
import { 
    AboutStyles, 
    SectionCenter, 
    Span,
    Heading4, 
    Paragraph
} from './about.styles';

const About = () => {
    return (
        <AboutStyles>
            <Title title='About me' />
            <SectionCenter>
                {
                    services.map(({id, icon, label, text}) => {
                        return (
                            <article key={id}>
                                <Span>{icon}</Span>
                                <Heading4>{label}</Heading4>
                                <Paragraph>{text}</Paragraph>
                            </article>
                        )
                    })
                }
            </SectionCenter>
        </AboutStyles>
    )
}

export default About
