import styled from 'styled-components';
import { Logo } from '../../components/ui/logo/Logo';
import { Menu } from '../../components/ui/menu/Menu';
import { SocialMedia } from '../../components/ui/socialMedia/SocialMedia';
import { useState } from 'react';
import { BurgerMenuButton } from '../../components/ui/burgerMenuButton/BurgerMenuButton';

export const Header = () => {

  return (
    <StyledHeader>
      <Logo place="Header" />
      <MenuSocialWrapper>
        <MenuWrapper>
          <Menu place="Header" />
        </MenuWrapper>
        <BurgerMenuButton />
        <SocialWrapper>
          <SocialMedia />
        </SocialWrapper>
      </MenuSocialWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 70px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 5px;

  @media (${({ theme }) => theme.media.small}) {
    margin-top: 20px;
  }

  @media (${({ theme }) => theme.mediaHeight.small}) {
    margin-top: 20px;
  }
`;

const MenuSocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-left: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 100%;
  gap: 50px;
  margin-right: 50px;

  @media (${({ theme }) => theme.media.medium}) {
    gap: 30px;
  }

  @media (${({ theme }) => theme.media.small}) {
    display: none;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (${({ theme }) => theme.media.small}) {
    display: none;
  }
`;
