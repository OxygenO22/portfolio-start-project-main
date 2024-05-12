import React from 'react';
import { SocialMediaData } from './SocialMediaData';
import { Icon } from '../../icon/Icon';
import styled from 'styled-components';
import { SvgSelector } from '../../svgSelector/SvgSelector';

export const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      {SocialMediaData.map((data) => (
        <ImageWrapper href="#" key={data.id}>
            <SvgSelector icon={data.iconId} />
        </ImageWrapper>
      ))}
    </SocialMediaWrapper>
  );
}

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const ImageWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;
  transition: 0.2s;

  &:last-child {
    margin-right: 0;
  }
`;



