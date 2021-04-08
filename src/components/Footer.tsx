import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from './Button/Button';

const SFooterContainer = styled.div`
    background-color: #242424;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const SFooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`
const SFooterLinks = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-top: 2rem;
    }
`
const SFooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const SFooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    width: 200px;
    height: 220px;
    box-sizing: border-box;

    &:hover {
        color: #e9e9e9;
        transition: 0.3s ease-out;
    }

    h2 {
        margin-bottom: 16px;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 8px;
        align-items: center;
    }
`
const SFooterLinkItemsText = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        color: teal;
        transition: 0.3s ease-out;
    }
`
const SSocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
const SSocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const SWebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
const SSocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 240px;
`

const SSocialIconLink = styled(Link)`
    color: #fff;
    font-size: 24px;
`

export const  Footer = () => {
  return (
    <SFooterContainer>
      <SFooterLinks>
        <SFooterLinkWrapper>
          <SFooterLinkItems>
            <h2>About Us</h2>
            <SFooterLinkItemsText to='/sign-up'>サイトの使い方</SFooterLinkItemsText>
            <SFooterLinkItemsText to='/'>お客様の声</SFooterLinkItemsText>
            <SFooterLinkItemsText to='/'>利用規約</SFooterLinkItemsText>
          </SFooterLinkItems>
          <SFooterLinkItems>
            <h2>Contact Us</h2>
            <SFooterLinkItemsText to='/'>お問い合わせ</SFooterLinkItemsText>
            <SFooterLinkItemsText to='/'>サポート</SFooterLinkItemsText>
            <SFooterLinkItemsText to='/'>スポンサーシップ</SFooterLinkItemsText>
          </SFooterLinkItems>
          <SFooterLinkItems>
            <h2>Social Media</h2>
            <SFooterLinkItemsText to='/'>Instagram</SFooterLinkItemsText>
            <SFooterLinkItemsText to='/'>Facebook</SFooterLinkItemsText>
            <SFooterLinkItemsText to='/'>Youtube</SFooterLinkItemsText>
            <SFooterLinkItemsText to='/'>Twitter</SFooterLinkItemsText>
          </SFooterLinkItems>
        </SFooterLinkWrapper>
      </SFooterLinks>
      <SSocialMedia>
        <SSocialMediaWrap>
          <SWebsiteRights>TRVL © 2020</SWebsiteRights>
          <SSocialIcons>
            <SSocialIconLink
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebookSquare />
            </SSocialIconLink>
            <SSocialIconLink
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagramSquare />
            </SSocialIconLink>
            <SSocialIconLink
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutubeSquare />
            </SSocialIconLink>
            <SSocialIconLink
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitterSquare />
            </SSocialIconLink>
          </SSocialIcons>
        </SSocialMediaWrap>
      </SSocialMedia>
    </SFooterContainer>
  )
}


