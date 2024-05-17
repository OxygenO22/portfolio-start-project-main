import React from 'react'
import styled from 'styled-components';
import { SocialMedia } from '../../../components/ui/socialMedia/SocialMedia';
import { Logo } from '../../../components/ui/logo/Logo';
import { Menu } from '../../../components/ui/menu/Menu';

export const Contacts = () => {
  return (
    <StyledSection>
      <StyledMailArticle>
        <Title>For any questions please mail me:</Title>
        <MailText>bamaikoxygeno22@gmail.com</MailText>
      </StyledMailArticle>
      <StyledFooterArticle>
        <ContactsWrapper>
          <LogoWrapper>
            <Logo place="Footer" />
          </LogoWrapper>
          <ContactsInfo>
              <ContactsLink href="tel:+375(29)281-68-71" target="_blank">
                <ContactsText>+375(29)281-68-71</ContactsText>
              </ContactsLink>
              <ContactsText>bamaikoxygeno22@gmail.com</ContactsText>
          </ContactsInfo>
          <SocialMedia />
        </ContactsWrapper>
        <NavigationWrapper>
          <MenuWrapper>
            <Menu place="Footer" />
          </MenuWrapper>
          <ContactsText>
            Designed and built by <ColoredSpan>Alex Budzko</ColoredSpan> with{" "}
            <ColoredSpan>Love</ColoredSpan> & <ColoredSpan>Coffee</ColoredSpan>
          </ContactsText>
        </NavigationWrapper>
      </StyledFooterArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 200px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 60px;
  }

  @media (${({ theme }) => theme.mediaHeight.small}) {
    margin-top: 60px;
  }
`;

const StyledMailArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 295px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-bottom: 60px;
  }
  @media (${({ theme }) => theme.mediaHeight.small}) {
    margin-bottom: 60px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 70px;
  letter-spacing: -1px;
  color: #1e0e62;

  @media (${({ theme }) => theme.media.large}) {
    font-size: 2.6rem;
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 2.6rem;
  }
`;

const MailText = styled.p`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 70px;
  letter-spacing: -1px;
  background: linear-gradient(to right, #00c0fd, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (${({ theme }) => theme.media.large}) {
    font-size: 2.6rem;
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 2.6rem;
  }
`;

const StyledFooterArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 60px;
`

const ContactsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #666666;
  padding-bottom: 44px;
  margin-bottom: 44px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 10%;

  @media (${({ theme }) => theme.media.small}) {
    display: none;
  }
`;

const ContactsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  margin-right: 40px;
  gap: 33px;

  @media (${({ theme }) => theme.media.medium}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 40px;
    gap: 0;
  }

  @media (${({ theme }) => theme.mediaHeight.small}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 40px;
    gap: 0;
  }
`;

const ContactsLink = styled.a`
  text-decoration: none;

  &:hover {
    background: linear-gradient(to right, #00c0fd, #e70faa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  margin-right: 50px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-right: 0;
  }
`;

const ContactsText = styled.p`
  font-weight: 400;
  font-size: 1.12rem;
  line-height: 26px;
  color: #42446e;
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (${({ theme }) => theme.media.medium}) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const ColoredSpan = styled.span`
  background: linear-gradient(to right, #00c0fd, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


