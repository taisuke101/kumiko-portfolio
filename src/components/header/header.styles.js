import styled from 'styled-components';

export const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding: 40px 100px;
    z-index: 10;
`

export const Logo = styled.a`
    position: relative;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
`

export const HeaderContainer = styled.ul`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderList = styled.li`
    position: relative;
    list-style: none;
    font-size: 20px;
    a {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 500px;
        transition: 0.5s;
    }
`

export const Banner = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`

