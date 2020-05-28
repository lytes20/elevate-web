import React from 'react';

import HeaderDetails from '../details/HeaderDetails';
import ProjectItem from '../details/ProjectItem';
import FooterDetail from '../details/FooterDetail';
import TeamItem from '../TeamItem';

import '../../assets/styles/pages/aboutus.scss';

import { whoWeAreBlurb, team } from '../../utils/constants';

function AboutUs() {
  const bgColor = '#164F95';
  return (
    <div className="AboutUs">
      <HeaderDetails bgColor={bgColor} />
      <ProjectItem project={whoWeAreBlurb} index={0} titleColor="gray" />
      <div className="team-container">
        <div className="team-container-heading">
          <h1>Our Team</h1>
        </div>
        <div className="team-images-container">
          {team.map(member => (
            <TeamItem member={member} />
          ))}
        </div>
      </div>
      <FooterDetail bgColor={bgColor} />
    </div>
  );
}

export default AboutUs;
