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
          <SvgWrapper key={data.id}>
            <SkillsSvgSelector icon={data.icon} />
          </SvgWrapper>
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
  height: 100%;
  margin: 146px 0 160px 0;
`;

const StyledArticle = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 200px;
  gap: 120px;
`

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 120px;
`
