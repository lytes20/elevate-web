import React from 'react';

import styled from 'styled-components';

import Header from '../Header';
import HeaderDetails from '../details/HeaderDetails';
import ProjectItem from '../details/ProjectItem';
import FooterDetail from '../details/FooterDetail';
import TeamItem from '../TeamItem';

import '../../assets/styles/pages/aboutus.scss';
import { aboutUsBg } from '../../assets';
import { whoWeAreBlurb, team, approachSteps } from '../../utils/constants';
import { HeaderImage, HeaderImageContainer } from '../shared';

const SectionContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  margin-top: 80px;
  margin-bottom: 80px;
  ${props => `
      background-color: ${props.bgColor};
    `}
`;

const SectionContainerHeading = styled.div`{
  width: 70vw;
  margin: 0 auto 40px;
  & h1 {
    ${props => `
      color: ${props.color};
    `}
  }
  `;

const SectionDetailsContainer = styled.div`{
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 60px;
  width: 70vw;
  margin: 0 auto;
  `;

const Desc = styled.div`
   {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 65%;
  }
`;

const Para = styled.p`
  font-size: 12px;
  line-height: 1.5;
`;

const Step = styled.h1`
  text-transform: capitalize;
  ${props => `
      color: ${props.color};
    `}
`;

function AboutUs() {
  const bgColor = '#164F95';
  return (
    <div className="AboutUs">
      <Header />
      <HeaderDetails bgColor={bgColor} bgImage={aboutUsBg}>
        <HeaderImage width={50}>
          <HeaderImageContainer>
            <Step color="#ffffff" style={{ fontSize: '6vw' }}>
              about us
            </Step>
          </HeaderImageContainer>
        </HeaderImage>
      </HeaderDetails>
      <ProjectItem project={whoWeAreBlurb} index={0} titleColor="gray" />
      <div className="team-container">
        <div className="team-container-heading">
          <h1>Our Team</h1>
        </div>
        <div className="team-images-container">
          {team.map((member, index) => (
            <TeamItem key={index} member={member} />
          ))}
        </div>
      </div>
      <SectionContainer>
        <SectionContainerHeading color="#164f95">
          <h1>Our Approach</h1>
        </SectionContainerHeading>
        <SectionDetailsContainer>
          <Desc>
            <div>
              <Para>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book.
              </Para>
            </div>
          </Desc>
          <div>
            {approachSteps.map(approachStep => (
              <Step key={approachStep} color="#164f95">
                {approachStep}
              </Step>
            ))}
          </div>
        </SectionDetailsContainer>
      </SectionContainer>
      <FooterDetail bgColor={bgColor} />
    </div>
  );
}

export default AboutUs;
