import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from './Button/Button'
import { menuData } from '../data/MenuData'
import { FaBars } from 'react-icons/fa'

const SNav = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    background-color: red;
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none; 
`
const SLogo = styled(Link)`
    ${NavLink}
    font-weight: 700;
    font-style: italic;
`
const SMenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        font-size: 25px;
        color: #fff;
    }
`
const SNavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const SNavMenuLInk = styled(Link)`
    ${NavLink}
`

const SNavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`


export const Navbar = () => {
    return (
        <SNav>
            <SLogo to='/'>TRAVEL</SLogo>
            <SMenuBars />
            <SNavMenu>
                {menuData.map((path, index) => (
                    <>
                        <SNavMenuLInk key={index} to={path.link}>
                            {path.title}
                        </SNavMenuLInk>
                    </>
                ))}
            </SNavMenu>
            <SNavBtn>
                <Button to='/contact' primary={true}>Contact Us</Button>
            </SNavBtn>
        </SNav>
    )
}