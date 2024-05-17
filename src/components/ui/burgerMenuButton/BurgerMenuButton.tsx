import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { openCloseBurgerMenu } from '../../../store/burgerMenu/BurgerMenuSlice';

export const BurgerMenuButton = () => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  const dispatch = useAppDispatch();

  return (
    <StyledButton onClick={() => dispatch(openCloseBurgerMenu(true))}>
      <ButtonText>Portfolio menu</ButtonText>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  border: none;
  background: transparent;
  border-radius: 10px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #071ef5;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
  }

  @media (${({ theme }) => theme.media.small}) {
    display: flex;
  }
`;

const ButtonText = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  line-height: 26px;
  text-decoration: none;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
