import React from 'react';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import HeaderDetails from './HeaderDetails';
import ProjectItem from './ProjectItem';

import { uiUxProjects } from '../../utils/constants';
import { uiUxLabel, uiUxMain, uiUxDetailsBg } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/uiuxdetails.scss';
import { HeaderImage, HeaderImageContainer } from '../shared';

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
