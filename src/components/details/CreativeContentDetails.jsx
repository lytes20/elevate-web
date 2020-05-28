import React from 'react';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import HeaderDetails from './HeaderDetails';
import ProjectItem from './ProjectItem';

import { uiUxProjects } from '../../utils/constants';
import { creativeContentBg, creativeContentLabel, bulbImage } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/uiuxdetails.scss';
import { HeaderImage, HeaderImageContainer } from '../shared';

const creativeContentColor = '#F7243E';
const CreativeContentDetails = () => {
  return (
    <div>
      <Header />
      <div>
        <HeaderDetails bgImage={creativeContentBg}>
          <HeaderImage>
            <HeaderImageContainer>
              <img src={creativeContentLabel} alt="text branding" />
            </HeaderImageContainer>
            <HeaderImageContainer>
              <img src={bulbImage} alt="text branding" />
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
          <ProjectItem key={index} project={project} index={index} titleColor={creativeContentColor} />
        ))}
      </div>
      <FooterDetail bgColor={creativeContentColor} />
    </div>
  );
};

export default CreativeContentDetails;
