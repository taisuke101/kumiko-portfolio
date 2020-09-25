import React from 'react'

import services from '../../constants/services';
import Title from '../title/title';
import CustomButton from '../custom-button/custom-button';

import { 
    AboutStyles, 
    SectionCenter, 
    Span,
    Heading4, 
    Paragraph
} from './about.styles';

const About = () => {
    return (
        <>
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
            <CustomButton pageUrl='/aboutme/'>詳細はこちら</CustomButton>
        </AboutStyles>
        </>
    )
}

export default About
