import React from 'react';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import HeaderDetails from './HeaderDetails';
import ProjectItem from './ProjectItem';

import { uiUxProjects } from '../../utils/constants';
import { brandingTextBanner, smmBg } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/uiuxdetails.scss';

const socialMediaManagementColor = '#11c0ce';
const SocialMediaManagementDetails = () => {
  return (
    <div>
      <Header />
      <div>
        <HeaderDetails bgImage={smmBg}>
          <div className="details-header-image-container">
            <img src={brandingTextBanner} alt="text branding" />
          </div>
        </HeaderDetails>
        <div className="featured-projects-title">
          <h1>
            Featured <br />
            Projects
          </h1>
        </div>
        {uiUxProjects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} titleColor={socialMediaManagementColor} />
        ))}
      </div>
      <FooterDetail bgColor={socialMediaManagementColor} />
    </div>
  );
};

export default SocialMediaManagementDetails;
