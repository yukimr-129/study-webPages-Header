import React, { memo, VFC } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

import { menuData } from '../data/MenuData'
import { Button } from './Button/Button'

type isOpen = {
    isOpen: boolean;
}

const SDropDownContainer = styled.div<isOpen>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #dd9dbf;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
const SIcon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const SCloseIcon = styled(FaTimes)`
    color: #000d1a;
`
const SDropDownWrapper = styled.div`

`
const SDropDownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px); 
    }
`
const SDropDownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    letter-spacing: 2px;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
        background-color: #fff;
    }
`
const SBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

//props型定義
type Props = {
    isOpen: boolean;
    toggle: () => void;
}

export const Dropdown: VFC<Props> = memo((props) => {
    const { isOpen, toggle } = props

    return (
        <SDropDownContainer isOpen={isOpen} onClick={toggle}>
           <SIcon onClick={toggle}>
                <SCloseIcon />
           </SIcon>
           <SDropDownWrapper>
               <SDropDownMenu>
                   {menuData.map((menu, index) => (
                       <SDropDownLink key={index} to={menu.link}>
                           {menu.title}
                       </SDropDownLink>
                   ))}
               </SDropDownMenu>
               <SBtnWrap>
                   <Button primary={true} maxwidth='160px' round='true' big={true} to='/contact'>
                       Contact Us
                   </Button>
               </SBtnWrap>
           </SDropDownWrapper>
        </SDropDownContainer>
    )
})