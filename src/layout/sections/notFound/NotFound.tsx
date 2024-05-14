import React from 'react'
import styled from 'styled-components';

export const NotFound = () => {
  return (
    <StyledSection>
      <Title>Sorry :/, But this page is not found!</Title>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 200px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 70px;
  letter-spacing: -1px;
  color: #1e0e62;
  text-align: center;

  @media (${({ theme }) => theme.media.large}) {
    font-size: 2.6rem;
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 2.6rem;
  }
`;
