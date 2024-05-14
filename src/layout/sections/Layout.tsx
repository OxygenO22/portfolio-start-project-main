import React from 'react'
import { Header } from '../header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useTypedSelector } from '../../components/hooks/useTypedSelector';
import { BurgerMenu } from '../../components/ui/burgerMenu/BurgerMenu';

export const Layout = () => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);

  return (
    <StyledLayout>
      <StyledLayoutInner>
        {isBurgerMenuOpen === true && <BurgerMenu />}
        <Header />
        <Outlet />
      </StyledLayoutInner>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const StyledLayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1220px;
  background: #ffffff;
  padding: 0 10px 0 10px;
`;
