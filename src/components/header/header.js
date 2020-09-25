import React from 'react'
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { 
    HeaderStyles, 
    Logo,
    HeaderContainer,
    HeaderList
} from './header.styles';

const Header = () => {
    return (
        <>
            <HeaderStyles>
                <Logo>Kumiko</Logo>
                <HeaderContainer>
                    <HeaderList><Link to={`/`}>Home</Link></HeaderList>
                    <HeaderList><Link to={`/aboutme/`}>About Me</Link></HeaderList>
                    <HeaderList><Link to={`/portfolio/`}>Portfolio</Link></HeaderList>
                    <HeaderList><Link to={`/contact/`}>Contact</Link></HeaderList>
                </HeaderContainer>
            </HeaderStyles>
            <section className='banner'></section>
        </>
    )
}

export default Header
