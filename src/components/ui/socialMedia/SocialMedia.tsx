import React from 'react';
import { SocialMediaData } from './SocialMediaData';
import { Icon } from '../../icon/Icon';
import styled from 'styled-components';

export const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      {SocialMediaData.map((data) => (
        <ItemWrapper key={data.id}>
          <a href="#">
            <Icon iconId={data.iconId} width="30" height="30" />
          </a>
        </ItemWrapper>
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
  border: 1px solid #000;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  border: 1px solid #000;
`;
