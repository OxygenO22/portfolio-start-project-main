import React from 'react'
import styled from 'styled-components';
import { ReactComponent as ClassesSvg } from '../../../assets/images/svg/aboutPage/class.svg'
import { ReactComponent as PlaceSvg } from '../../../assets/images/svg/aboutPage/place.svg'
import { ReactComponent as DataSvg } from '../../../assets/images/svg/aboutPage/data.svg'


type AboutExperienceItemPropsType = {
  title: string;
  classes: string;
  classesType: string;
  place: string;
  data: string;
}

export const AboutExperienceItem = (props: AboutExperienceItemPropsType) => {
  return (
    <ItemWrapper>
      <Row>
        <Title>{props.title}</Title>
        <ClassTypeBody>
          <ClassTypeText>{props.classesType}</ClassTypeText>
        </ClassTypeBody>
      </Row>
      <Row>
        <TextWrapper>
          <SvgTextWrapper>
            <Text>
              <ClassesSvg />
              <TextSpan>{props.classes}</TextSpan>
            </Text>
          </SvgTextWrapper>
          <SvgTextWrapper>
            {props.place !== "" && <PlaceSvg />}
            <Text>
              <TextSpan>{props.place}</TextSpan>
            </Text>
          </SvgTextWrapper>
        </TextWrapper>
        <SvgTextWrapper>
          <DataSvg />
          <Text>
            <TextSpan>{props.data}</TextSpan>
          </Text>
        </SvgTextWrapper>
      </Row>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 2px solid #ebeaed;
  margin-bottom: 30px;
  padding-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 28px;
  letter-spacing: 1px;
  color: #a7a7a7;
`;

const ClassTypeBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 24px;
  background: #d7ffe0;
  border-radius: 100px;
`;

const ClassTypeText = styled.p`
  font-weight: 600;
  font-size: 0.56rem;
  line-height: 26px;
  color: #018c0f;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 28px;
  color: #a7a7a7;
`;

const TextSpan = styled.span`
  margin-left: 4px;
`

const SvgTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 45%;
`


