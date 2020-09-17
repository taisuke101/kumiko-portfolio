import React from 'react'

import Header from './header/header';
import Footer from './footer/footer';

import './style.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
