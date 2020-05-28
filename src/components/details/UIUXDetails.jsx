import React from 'react';

import styled from 'styled-components';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import HeaderDetails from './HeaderDetails';
import ProjectItem from './ProjectItem';

import { uiUxProjects } from '../../utils/constants';
import { uiUxLabel, uiUxMain, uiUxDetailsBg } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/uiuxdetails.scss';

const HeaderImage = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
`;

const HeaderImageContainer = styled.div`
  flex: 1;
  & img {
    width: 100%;
  }
`;

const UIUXDetails = () => {
  return (
    <div>
      <Header />
      <div>
        <HeaderDetails bgImage={uiUxDetailsBg}>
          <HeaderImage>
            <HeaderImageContainer>
              <img src={uiUxLabel} alt="text branding" />
            </HeaderImageContainer>
            <HeaderImageContainer>
              <img src={uiUxMain} alt="text branding" />
            </HeaderImageContainer>
          </HeaderImage>
        </HeaderDetails>
        <div className="featured-projects-title">
          <h1>
            Featured <br />
            Projects
          </h1>
        </div>
        {uiUxProjects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} titleColor="#B5BC21" />
        ))}
      </div>
      <FooterDetail bgColor="#B5BC21" />
    </div>
  );
};

export default UIUXDetails;
