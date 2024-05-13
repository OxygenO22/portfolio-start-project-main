import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from "../../assets/images/svg/logo.svg";

export const Logo = () => {
  return (
    <StyledLogo href="/">
      <LogoSvg />
    </StyledLogo>
  );
}

const StyledLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`