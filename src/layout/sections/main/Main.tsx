import React from 'react'
import styled from 'styled-components';
import photo from "../../../assets/images/pictures/myPhoto.webp";
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <div>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <h2>Hi 👋,</h2>
          <h2> My name is</h2>
          <h2>Pavan MG</h2>
          <h1>I build things for web</h1>
        </div>
        <MyPhotoWrapper>
          <MyPhoto src={photo} alt="My photo" />
        </MyPhotoWrapper>
      </FlexWrapper>
    </div>
  );
}

const MyPhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
  background: linear-gradient(#e70faa, #00c0fd);
  border-radius: 50%;
  overflow: hidden;
`;

const MyPhoto = styled.img`
  width: 100%;
  max-width: 335px;
  height: 100%;
  max-height: 335px;
  border-radius: 50%;
  object-fit: cover;
`;


