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
  text-decoration: none;
  color: #000;
  gap: 50px;
  transition: .3s;
  &:hover {
    color: #071ef5;
    border-bottom: 2px solid #071ef5;
  }
  &.active {
    color: #b314e4;
  }
`;