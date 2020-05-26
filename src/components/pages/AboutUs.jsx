import React from 'react';

import HeaderDetails from '../details/HeaderDetails';
import ProjectItem from '../details/ProjectItem';
import TeamItem from '../TeamItem';

import '../../assets/styles/pages/aboutus.scss';

import { whoWeAreBlurb, team } from '../../utils/constants';

function AboutUs() {
  return (
    <div className="AboutUs">
      <HeaderDetails bgColor="#164F95" />
      <ProjectItem project={whoWeAreBlurb} index={0} titleColor="gray" />
      <div className="team-container">
        <div>
          <h1>Our Team</h1>
        </div>
        <div className="team-images-container">
          {team.map(member => (
            <TeamItem member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
