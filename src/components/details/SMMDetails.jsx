import React from 'react';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import HeaderDetails from './HeaderDetails';
import ProjectItem from './ProjectItem';

import { uiUxProjects } from '../../utils/constants';
import { smmBg, smmLabel } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/uiuxdetails.scss';
import { HeaderImage, HeaderImageContainer } from '../shared';

const socialMediaManagementColor = '#11c0ce';
const SocialMediaManagementDetails = () => {
  return (
    <div>
      <Header />
      <div>
        <HeaderDetails bgImage={smmBg}>
          <HeaderImage width={25}>
            <HeaderImageContainer>
              <img src={smmLabel} alt="text branding" />
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
          <ProjectItem key={index} project={project} index={index} titleColor={socialMediaManagementColor} />
        ))}
      </div>
      <FooterDetail bgColor={socialMediaManagementColor} />
    </div>
  );
};

export default SocialMediaManagementDetails;
