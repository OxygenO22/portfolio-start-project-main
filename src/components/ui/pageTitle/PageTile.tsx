import React from 'react'
import styled from 'styled-components';
import { PageTileData } from './PageTileData';

type PageTitlePropsType = {
  page: "About" | "Skills" | "Projects";
};

export const PageTile = (props: PageTitlePropsType) => {
  return (
    <>
      {PageTileData.map(
        (data) =>
          props.page === data.page && (
            <StyledArticle key={data.id}>
              <TitleWrapper>
                <Title>{data.title}</Title>
              </TitleWrapper>
                <StyledText>{data.text}</StyledText>
            </StyledArticle>
          )
      )}
    </>
  );
};

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media (${({ theme }) => theme.media.small}) {
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 30px;

  @media (${({ theme }) => theme.media.small}) {
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 2.6rem;
  line-height: 52px;
  letter-spacing: -0.4px;
  color: #42446e;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 1.12rem;
  line-height: 26px;
  color: #666666;
`;
