import React from 'react'
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { openCloseBurgerMenu } from '../../../store/burgerMenu/BurgerMenuSlice';

export const CloseButton = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledCloseButton onClick={() => dispatch(openCloseBurgerMenu(false))}>
      <ButtonText>&#10006;</ButtonText>
    </StyledCloseButton>
  );
}

const StyledCloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(to right, #00c2fd71, #e70faa71);
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #071ef5;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 26px;
  text-decoration: none;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
