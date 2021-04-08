import React, { VFC } from 'react'
import styled from 'styled-components'
import { Button } from './Button/Button'

type Reverse = {
    reverse: boolean;
}

const SSection = styled.section`
    width: 100%;
    height: 100%;
    padding: 2rem 0rem;
`
const SContainer = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px; 

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding-top: 0;
        padding-bottom: 0;
    }
`
const SColumnLeft = styled.div<Reverse>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    order: ${({reverse}) => (reverse ? '2' : '1')};
    line-height: 1.2;
    padding: 1rem 2rem;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem 6vw 2rem);
    }

    p {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px){
        padding-top: 0;
        padding-bottom: 0;
    }
`
const SColumnRight = styled.div<Reverse>`
    padding: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }

    @media screen and (max-width: 768px){
        order: ${({reverse}) => (reverse ? '2' : '1')};
        padding-top: 0px;
    }
`
//props型定義
type InfoContent = {
    heading: string;
    content: string;
    Subcontent: string;
    buttonLabel: string;
    image: string;
    reverse: boolean;
    delay: number;
}

type Props = {
    InfoData: Array<InfoContent>;
}

export const InfoSection: VFC<Props> = (props) => {
    const { InfoData } = props

    return (
        <SSection>
            {InfoData.map((info, index) => (
                <SContainer key={index}>
                    <SColumnLeft reverse={info.reverse}>
                        <h1>{info.heading}</h1>
                        <p>{info.content}</p>
                        <p>{info.Subcontent}</p>
                        <Button to='/homes' primary={true}>{info.buttonLabel}</Button>
                    </SColumnLeft>
                    <SColumnRight reverse={info.reverse}>
                        <img src={info.image} alt='home' />
                    </SColumnRight>
                </SContainer>
            ))}
        </SSection>
    )
}


