import React from 'react'
import styled from 'styled-components';
import { PageTile } from '../../../components/ui/pageTitle/PageTile';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <StyledSection>
      <PageTile page="Projects" />
      <CardWrapper>
        <ProjectCard />
      </CardWrapper>
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
  margin-top: 160px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 60px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 34px;
  margin: 110px 0 136px 0;

  @media (${({ theme }) => theme.media.medium}) {
    margin: 60px 0 60px 0;
  }
`;
