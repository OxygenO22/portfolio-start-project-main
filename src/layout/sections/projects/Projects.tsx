import React from 'react'
import styled from 'styled-components';
import { PageTile } from '../../../components/ui/pageTitle/PageTile';

export const Projects = () => {
  return (
    <StyledSection>
      <PageTile page="Projects" />
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
  margin-top: 160px;
`;
