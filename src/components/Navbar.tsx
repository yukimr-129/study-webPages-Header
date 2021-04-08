import React, { memo, VFC } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import { Button } from './Button/Button'
import { menuData } from '../data/MenuData'

const SNav = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    background-color:rgba(255,255,255,0.8);

    @media screen and (max-width: 768px) {
        background-color: transparent;
    }
`
const NavLink = css`
    color: #767676;
    font-size: 1.4rem;
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

    &:hover {
        color: #111;
    }
`

const SNavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

//props型定義
type Props = {
    toggle: () => void;
}

export const Navbar: VFC<Props> = memo((props) => {
    const { toggle } = props
    return (
        <SNav>
            <SLogo to='/'>TRAVEL</SLogo>
            <SMenuBars onClick={toggle}/>
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
})