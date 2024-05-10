import React from 'react'
import { NavLink as BaseNavLink } from "react-router-dom";
import styled from 'styled-components';

type MenuPropsType = {
  path: string;
  name: string;
};

export const Menu = (props: MenuPropsType) => {
  const { path, name } = props; 
  return (
    <NavLink to={path}>
      {name}
    </NavLink>
  );
}

const NavLink = styled(BaseNavLink)`
  display: flex;
  align-items: center;
  font-size: 1.1em;
  font-weight: 500;
  line-height: 26px;
  text-decoration: none;
  color: #666666;
  transition: 0.3s;
  &:hover {
    color: #071ef5;
  }
  &.active {
    color: #b314e4;
  }
`;