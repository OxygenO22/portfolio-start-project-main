import React from 'react'
import { AboutExperienceItem } from './AboutExperienceItem';
import { AboutTitle } from './AboutTitle';
import { AboutArticleData } from "./AboutArticleData";
import styled from 'styled-components';
import { ReactComponent as WallSvg } from "../../../assets/images/svg/aboutPage/wall.svg";
import { PageTile } from '../../../components/ui/pageTitle/PageTile';

export const About = () => {
  return (
    <StyledSection>
      <InfoColumn>
        <PageTile page="About" />
        {AboutArticleData.map((props) => (
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
        ))}
      </InfoColumn>
      <PictureColumn>
        <WallSvg />
      </PictureColumn>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 125px;
  overflow: hidden;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 60px;
    justify-content: center;
  }

  @media (${({ theme }) => theme.mediaHeight.small}) {
    margin-top: 60px;
  }
`;

const InfoColumn = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 700px;
  height: 100%;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 34px 0 34px 0;

  &:last-child {
    margin: 0;
  }
`;

const PictureColumn = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: -120px;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
