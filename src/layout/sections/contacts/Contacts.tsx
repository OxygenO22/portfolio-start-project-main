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
        <MailText>hi@pavanmg.in</MailText>
      </StyledMailArticle>
      <StyledFooterArticle>
        <ContactsWrapper>
          <LogoWrapper>
            <Logo place="Footer" />
          </LogoWrapper>
          <ContactsInfo>
            <ContactsLink href="#">
              <ContactsText>+91 12345 09876</ContactsText>
            </ContactsLink>
            <ContactsLink href="#">
              <ContactsText>info@example.com</ContactsText>
            </ContactsLink>
          </ContactsInfo>
          <SocialMedia />
        </ContactsWrapper>
        <NavigationWrapper>
          <MenuWrapper>
            <Menu place="Footer" />
          </MenuWrapper>
          <ContactsText>
            Designed and built by <ColoredSpan>Pavan MG</ColoredSpan> with{" "}
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
`;

const StyledMailArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 295px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 70px;
  letter-spacing: -1px;
  color: #1e0e62;
`;

const MailText = styled(Title)`
  background: linear-gradient(to right, #00c0fd, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
`;

const ContactsInfo = styled(LogoWrapper)`
  justify-content: flex-end;
  width: 80%;
  margin-right: 40px;
  gap: 33px;
`

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
`;

const ColoredSpan = styled.span`
  background: linear-gradient(to right, #00c0fd, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


