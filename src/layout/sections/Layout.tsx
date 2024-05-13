import React from 'react'
import { Header } from '../header/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <StyledLayout>
      <StyledLayoutInner>
        <Header />
        <Outlet />
      </StyledLayoutInner>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: rgb(214, 156, 30);
  overflow-x: hidden;
`;

const StyledLayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
`;
