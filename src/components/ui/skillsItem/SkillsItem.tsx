import React from 'react'
import { Icon } from '../../icon/Icon';
import styled from 'styled-components';

type SkillPropsType = {
  id: number;
  iconId: string;
}

export const SkillsItem = (props: SkillPropsType) => {
  return (
    <StyledSkill key={props.id}>
      <Icon iconId={props.iconId} />
    </StyledSkill>
  );
}


const StyledSkill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.7%;
`