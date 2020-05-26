import React from 'react';
import { brandingTextBanner } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/uiuxdetails.scss';

import Header from '../Header';
import FooterDetail from './FooterDetail';
import ProjectItem from './ProjectItem';

import { uiUxProjects } from '../../utils/constants';

const UIUXDetails = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="details-header branding-header">
          <div className="details-header-image-container">
            <img src={brandingTextBanner} alt="text branding" />
          </div>
        </div>
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
