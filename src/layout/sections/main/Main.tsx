import React from 'react'
import styled from 'styled-components';
import photo from "../../../assets/images/pictures/myPhoto.webp";
import photoBackground from '../../../assets/images/svg/photo-background.svg'

export const Main = () => {
  return (
    <StyledSection>
      <div>
        <StyledTitle>Hi 👋,</StyledTitle>
        <StyledTitle> My name is</StyledTitle>
        <StyledTitleName>Pavan MG</StyledTitleName>
        <StyledTitle as="h1">I build things for web</StyledTitle>
      </div>
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
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 70px;
  letter-spacing: -1px;
  color: #42446e;
`;

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
  height: 350px;
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


