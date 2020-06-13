import React from 'react';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import HeaderDetails from './HeaderDetails';
import ProjectItem from './ProjectItem';
import NextPageLink from './NextPageLink';

import { uiUxProjects } from '../../utils/constants';
import { creativeContentBg, creativeContentLabel, bulbImage, logoLimeGreen } from '../../assets';
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
          <HeaderImage width={50}>
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
      <NextPageLink path="/social-media-management" nextPageName="Social Media Management" color="#F7243E" page="creativecontent" />
      <FooterDetail bgColor={creativeContentColor} />
    </div>
  );
};

export default CreativeContentDetails;
