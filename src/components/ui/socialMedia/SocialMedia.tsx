import React from 'react';
import { SocialMediaData } from './SocialMediaData';
import { Icon } from '../../icon/Icon';
import styled from 'styled-components';
import { SocialMediaSvgSelector } from './SocialMediaSvgSelector';

export const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      {SocialMediaData.map((data) => (
        <ImageWrapper key={data.id}>
          <StyledA href={data.href} target="_blank">
            <SocialMediaSvgSelector icon={data.iconId} />
          </StyledA>
        </ImageWrapper>
      ))}
    </SocialMediaWrapper>
  );
}

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 130px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    position: absolute;
    transform: translate(-2px, -2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;



