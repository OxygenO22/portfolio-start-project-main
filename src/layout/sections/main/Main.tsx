import React from 'react'
import styled from 'styled-components';
import photo from "../../../assets/images/pictures/AlexPhoto.webp";
import photoBackground from '../../../assets/images/svg/photo-background.svg'

export const Main = () => {
  return (
    <StyledSection>
      <TextWrapper>
        <StyledTitle>Hi 👋,</StyledTitle>
        <StyledTitle> My name is</StyledTitle>
        <StyledTitleName>
          <TitleNameLink
            href="https://www.linkedin.com/in/alexandr-budzko-823443218/"
            target="_blank"
          >
            Alex Budzko
          </TitleNameLink>
        </StyledTitleName>
        <StyledTitle as="h1">I build things for web</StyledTitle>
      </TextWrapper>
      <MyPhotoWrapper>
        <StyledPhotoBackgr src={photoBackground} alt="Photo background" />
        <MyPhoto src={photo} alt="My photo" />
      </MyPhotoWrapper>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  @media (${({theme}) => theme.media.medium}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;

   @media (${({theme}) => theme.media.medium}) {
    align-items: center;
  }
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 70px;
  letter-spacing: -1px;
  color: #42446e;
`;

const TitleNameLink = styled.a`
  text-decoration: none;
`

const StyledTitleName = styled(StyledTitle)`
  background: linear-gradient(to right, #00c0fd, #e70faa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MyPhotoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  min-width: 350px;
  height: 350px;
  min-height: 350px;
  background: linear-gradient(#e70faa, #00c0fd);
  border-radius: 50%;
`;

const MyPhoto = styled.img`
  width: 100%;
  max-width: 335px;
  height: 100%;
  max-height: 335px;
  border-radius: 50%;
  object-fit: cover;
`;

const StyledPhotoBackgr = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
`


