import React from 'react';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import HeaderDetails from './HeaderDetails';
import ProjectItem from './ProjectItem';
import NextPageLink from './NextPageLink';


import { smmProjects } from '../../utils/constants';
import { smmBg, smmLabel, heartMainImage } from '../../assets';
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
          <HeaderImage width={40}>
            <HeaderImageContainer>
              <img src={smmLabel} alt="text branding" />
            </HeaderImageContainer>
            <HeaderImageContainer>
              <img src={heartMainImage} alt="text branding" />
            </HeaderImageContainer>
          </HeaderImage>
        </HeaderDetails>
        <div className="featured-projects-title">
          <h1>
            Featured <br />
            Projects
          </h1>
        </div>
        {smmProjects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} titleColor={socialMediaManagementColor} />
        ))}
      </div>
      <NextPageLink path="/ui-ux" nextPageName="UI UX" color="#11c0ce" page="smm" />
      <FooterDetail bgColor={socialMediaManagementColor} />
    </div>
  );
};

export default SocialMediaManagementDetails;
