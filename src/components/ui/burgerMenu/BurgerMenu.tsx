import React from 'react'
import styled from 'styled-components';
import { Menu } from '../menu/Menu';
import { CloseButton } from '../closeButton/CloseButton';
import { SocialMedia } from '../socialMedia/SocialMedia';

export const BurgerMenu = () => {
  return (
    <StyledSection>
      <Menu place="BurgerMenu" />
      <SocialMedia />
      <CloseButton />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;


