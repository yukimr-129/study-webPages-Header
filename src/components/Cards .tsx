import React, { VFC } from 'react'
import styled from 'styled-components'
import { CardItem } from './CardItem'

const SCards = styled.div`
    padding: 4rem;
    background: #fff;

    h1 {
        text-align: center;
    }
`

const SCardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
`

const SCardsWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;
`

const SCardsItems = styled.ul`
    display: flex;
    margin-bottom: 24px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

//props型定義
type CardDataItem = {
    src: string;
    text: string;
    label: string;
    path: string;
}

type Props = {
    CardData1: Array<CardDataItem>;
    CardData2: Array<CardDataItem>;
}

export const Cards: VFC<Props>  = (props) => {
    const { CardData1, CardData2 } = props
    return (
        <SCards>
            <h1>Check out these EPIC Destinations!</h1>
            <SCardsContainer>
                <SCardsWrapper>
                    <SCardsItems>
                        {CardData1.map((card, index) => (
                            <CardItem
                                key={index}
                                card={card}
                            />
                        ))}
                    </SCardsItems>
                    <SCardsItems>
                        {CardData2.map((card, index) => (
                            <CardItem
                                key={index}
                                card={card}
                            />
                        ))}
                    </SCardsItems>
                </SCardsWrapper>
            </SCardsContainer>
        </SCards>
    )
}
