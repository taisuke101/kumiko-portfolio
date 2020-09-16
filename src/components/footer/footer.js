import React from 'react'

import SocialLinks from '../../constants/sociallink/sociallink';

import { FooterContainer } from './footer.styles';


const Footer = () => {
    return (
        <FooterContainer>
            <SocialLinks />
            <p>
            &copy;{new Date().getFullYear()} Created Taisuke Yamamoto
            </p>
        </FooterContainer>
    )
}

export default Footer
