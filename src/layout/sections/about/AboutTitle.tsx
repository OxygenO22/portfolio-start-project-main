import React from 'react'
import styled from 'styled-components';

type AboutTitlePropsType = {
  title: string;
}

export const AboutTitle = (props: AboutTitlePropsType) => {
  return (
    <TitleWrapper>
      <Title>{props.title}</Title>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 52px;
  letter-spacing: -0.4px;
  color: #42446e;
`;
