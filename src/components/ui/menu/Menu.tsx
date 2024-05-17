import React from 'react'
import { NavLink as BaseNavLink } from "react-router-dom";
import styled from 'styled-components';
import { MenuData } from './MenuData';
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { openCloseBurgerMenu } from '../../../store/burgerMenu/BurgerMenuSlice';

type MenuPropsType = {
  place: 'Header' | 'Footer' | 'BurgerMenu';
};

export const Menu = (props: MenuPropsType) => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  const dispatch = useAppDispatch();

  return (
    <>
      {MenuData.map((data) =>
        props.place === "BurgerMenu" ? (
          <BurgerNavLink
            key={data.id}
            to={data.path}
            onClick={() => dispatch(openCloseBurgerMenu(false))}
          >
            {data.name}
          </BurgerNavLink>
        ) : (
          <NavLink key={data.id} to={data.path}>
            {props.place === "Header" ? data.name : data.namefooter}
          </NavLink>
        )
      )}
    </>
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.3s;
  &:hover {
    color: #071ef5;
  }
  &.active {
    background: linear-gradient(to right, #00c0fd, #e70faa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BurgerNavLink = styled(NavLink)`
  flex-direction: column;
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 6px;
`;

