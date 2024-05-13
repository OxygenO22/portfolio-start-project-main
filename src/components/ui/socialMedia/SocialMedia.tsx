import React from 'react';
import { SocialMediaData } from './SocialMediaData';
import { Icon } from '../../icon/Icon';
import styled from 'styled-components';
import { SocialMediaSvgSelector } from './SocialMediaSvgSelector';

export const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      {SocialMediaData.map((data) => (
        <ImageWrapper href="#" key={data.id}>
          <SocialMediaSvgSelector icon={data.iconId} />
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

const ImageWrapper = styled.a`
  cursor: pointer;
`;



