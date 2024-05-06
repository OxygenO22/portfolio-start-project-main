import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/ui/sectionTitle/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SkillsData } from './SkillsData';
import { SkillsItem } from '../../../components/ui/skillsItem/SkillsItem';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle />
      <FlexWrapper wrap='flex-wrap'>
        {
          /* SkillsData.map(props => <SkillsItem id={props.id} iconId={props.iconId} />) */
        }
      </FlexWrapper>
      
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  
`




