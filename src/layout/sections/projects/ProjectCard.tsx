import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ChainSvg } from "../../../assets/images/svg/projectsPage/chain.svg";
import { ReactComponent as GitHubSvg } from "../../../assets/images/svg/projectsPage/github.svg";
import { ProjectCardData } from './ProjectCardData';

export const ProjectCard = () => {
  return (
    <>
      {ProjectCardData.map((data) => (
        <StyledArticle key={data.id}>
          <PictureWrapper>
            <StyledImg src={data.src} alt={data.alt} />
          </PictureWrapper>
          <ContentWrapper>
            <TitleWrapper>
              <Title>{data.title}</Title>
            </TitleWrapper>
            <MainTextWrapper>
              <MainText>
                {data.mainText}
              </MainText>
            </MainTextWrapper>
            <TechStackTextWrapper>
              <TechStackText>
                <TechStackTextSpan>{data.stackSpanText}</TechStackTextSpan> {data.stackText}
              </TechStackText>
            </TechStackTextWrapper>
            <LinkBlockWrapper>
              <LinkWrapper>
                <ChainSvg />
                <StyledLink href={data.chainLink}>
                  <LinkText>{data.chainLinkText}</LinkText>
                </StyledLink>
              </LinkWrapper>
              <LinkWrapper>
                <GitHubSvg />
                <StyledLink href={data.githubLink}>
                  <LinkText>{data.githubLinkText}</LinkText>
                </StyledLink>
              </LinkWrapper>
            </LinkBlockWrapper>
          </ContentWrapper>
        </StyledArticle>
      ))}
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 375px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: .3s;
`;

const PictureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 260px;
  background: #666666;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 25px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 17px;
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 26px;
  color: #000;
`

const MainTextWrapper = styled(TitleWrapper)`
  justify-content: flex-start;
  margin-bottom: 12px;
`;

const MainText = styled.p`
  font-weight: 300;
  font-size: 1.12rem;
  line-height: 26px;
  color: #666666;
`;

const TechStackTextWrapper = styled(TitleWrapper)`
  justify-content: flex-start;
  margin-bottom: 21px;
`;

const TechStackText = styled.p`
  font-weight: 300;
  font-size: .87rem;
  line-height: 26px;
  color: #666666;
`;

const TechStackTextSpan = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 26px;
  color: #666666;
`;

const LinkBlockWrapper = styled(TitleWrapper)`
  justify-content: flex-start;
  margin-bottom: 0;
  gap: 50px;
`;

const LinkWrapper = styled(TitleWrapper)`
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0;
`;

const StyledLink = styled.a`
  margin-left: 10px;
  text-decoration: none;
`;

const LinkText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 26px;
  text-decoration: underline;
  color: #000;
  &:hover {
    background: linear-gradient(to right, #00c0fd, #e70faa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
