import React from 'react'
import styled from 'styled-components';
import { Menu } from '../menu/Menu';

export const BurgerMenu = () => {
  return (
    <StyledSection>
      <Menu place="BurgerMenu" />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;
