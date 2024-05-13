import React from 'react'
import { AboutExperienceItem } from './AboutExperienceItem';
import { AboutTitle } from './AboutTitle';
import { AboutArticleData } from "./AboutArticleData";
import styled from 'styled-components';
import { ReactComponent as WallSvg } from "../../../assets/images/svg/aboutPage/wall.svg";

export const About = () => {
  return (
    <StyledSection>
      <InfoColumn>
        {AboutArticleData.map((props) =>
          props.aboutMe ? (
            <StyledArticle key={props.id}>
              <AboutTitle title={props.title} />
              {props.aboutMe.map((props) => (
                <StyledText key={props.id}>{props.text}</StyledText>
              ))}
            </StyledArticle>
          ) : (
            <StyledArticle key={props.id}>
              <AboutTitle title={props.title} />
              {props.experience.map((props) => (
                <AboutExperienceItem
                  key={props.id}
                  title={props.title}
                  classes={props.classes}
                  classesType={props.classesType}
                  place={props.place}
                  data={props.data}
                />
              ))}
            </StyledArticle>
          )
        )}
      </InfoColumn>
      <PictureColumn>
          <WallSvg />
      </PictureColumn>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin-top: 125px;
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  max-width: 700px;
  height: 100%;
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 34px;

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledText = styled.p`
  font-weight: 400;
  font-size: 1.12rem;
  line-height: 26px;
  color: #666666;
`;

const PictureColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  height: 100%;
  overflow: hidden;
`;
