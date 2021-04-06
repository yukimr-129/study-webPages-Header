import React from 'react'
import styled, { css } from 'styled-components/macro'

const SHeroSection = styled.section`
    height: 100vh;
    max-width: 1100px;
    position: relative;
    overflow: hidden;
`
const SHeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`
export const Hero = () => {
    return (
        <SHeroSection>
            <SHeroWrapper>
                <h1>Hero</h1>
            </SHeroWrapper>
        </SHeroSection>
    )
}