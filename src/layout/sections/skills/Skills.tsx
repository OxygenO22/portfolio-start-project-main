import React from 'react'
import styled from 'styled-components';
import { PageTile } from '../../../components/ui/pageTitle/PageTile';
import { SkillsData } from './SkillsData';
import { SkillsSvgSelector } from './SkillsSvgSelector';

export const Skills = () => {
  return (
    <StyledSection>
      <PageTile page="Skills" />
      <StyledArticle>
        {SkillsData.map((data) => (
          <SkillsSvgSelector key={data.id} icon={data.icon} />
        ))}
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  margin-top: 146px;
`;

const StyledArticle = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 200px;
  gap: 110px
`
