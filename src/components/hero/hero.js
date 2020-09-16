import React from 'react'

import Background from '../background/background';

import {HeroContainer, CatchCopy, Heading3, Heading1} from './hero.styles';
const Hero = () => {
    return (
        <HeroContainer>
            <CatchCopy>
                <Heading3>I am Kumiko !!!</Heading3>
                <Heading1> Yeah!!!!!!</Heading1>
            </CatchCopy>
            <Background />
        </HeroContainer>
    )
}

export default Hero
