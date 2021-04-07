import React, { MutableRefObject, useEffect, useRef, useState, VFC } from 'react'
import styled, { css } from 'styled-components/macro'
import { Button } from './Button/Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const SHeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
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

const SHeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`
const SHeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        width: 100%;
        height: 100vh;
        position: absolute;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        z-index: 2;
        background: linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.2) 50%, 
            rgba(0, 0, 0, 0.6) 100%
        )
    }
`
const SHeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`
const SHeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`
const SArrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`

const SSliderButton = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background-color: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background-color: #cd853f;
        transform: scale(1.1);

    }
`

const SPrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`
const SNextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

//props型定義
type Slide = {
    title: string;
    plan: string;
    path:string;
    label: string;
    image: string;
    alt: string;
}

type Props = {
    slides: Array<Slide>;
}

export const Hero: VFC<Props> = (props) => {
    const { slides } = props

    //現在のスライドを保持
    const [currents, setCurrent] = useState(0)
    const length = slides.length

    const timeout: MutableRefObject<number | null> = useRef(null)

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1))
    //     }
    //     timeout.current = setTimeout(nextSlide, 3000)
    //     return () => {
    //         if(timeout.current){
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [currents, length])
    
    //次のスライド
    const onClickNextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        const next = currents === length - 1 ? 0 : currents + 1
        setCurrent(next)
        
    }

    //前のスライド
    const onClickPrevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        const prev = currents === 0 ? length - 1 : currents - 1
        setCurrent(prev)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <SHeroSection>
            <SHeroWrapper>
                {slides.map((data, index) => (
                    <SHeroSlide  key={index}>
                        {index === currents && (
                            <SHeroSlider>
                                <SHeroImage src={data.image} alt={data.alt} />
                                <SHeroContent>
                                    <h1>{data.title}</h1>
                                    <p>{data.plan}</p>
                                    <Button 
                                        to={data.path} 
                                        primary={true}
                                        maxwidth='160px'
                                    >
                                        {data.label}
                                        <SArrow />
                                    </Button>
                                </SHeroContent>
                            </SHeroSlider> 
                        )}
                    </SHeroSlide>
                ))}
                <SSliderButton>
                    <SPrevArrow onClick={onClickPrevSlide}/>
                    <SNextArrow onClick={onClickNextSlide}/>
                </SSliderButton>
            </SHeroWrapper>
        </SHeroSection>
    )
}