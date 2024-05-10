import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components';

export const Logo = () => {
  return (
    <StyledLogo href="">
      <Icon iconId={"css"} width="97" height="60" viewBox='0 0 97 60' />
    </StyledLogo>
  );
}

const StyledLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 60px;
  border: 2px solid #000;
`