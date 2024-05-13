import React from 'react'
import { Icon } from '../../icon/Icon'
import styled from 'styled-components';
import { ReactComponent as SvgLogo } from "../../../assets/images/svg/logo/logo.svg";
import { ReactComponent as SvgLogoBlack } from "../../../assets/images/svg/logo/logoBlack.svg";

type LogoTypeProps = {
  place: "Header" | "Footer";
};

export const Logo = (props: LogoTypeProps) => {
  return (
    <StyledLogo href="/">
      {props.place  === 'Header' ? <SvgLogo /> : <SvgLogoBlack />}
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`