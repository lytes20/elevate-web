import React from 'react';

import styled, { css } from 'styled-components';

import '../../assets/styles/details/projectitem.scss';

const ProjectImageContainer = styled.div`
  flex: 1;
  & img {
    width: 100%;
  }
  ${props => `
      order: ${props.order};
    `}
  ${props =>
    props.order === 0 &&
    css`
      margin-right: 40px;
    `}
  ${props =>
    props.order === 1 &&
    css`
      margin-left: 40px;
    `}
`;

const ProjectTitle = styled.h1`
  ${props => `
      color: ${props.color};
    `}
`;

function ProjectItem(props) {
  const { project, index, titleColor } = props;
  console.log(index);
  return (
    <div className="ProjectItem">
      <div className="ProjectItem-contents">
        <ProjectImageContainer order={index % 2 === 0 ? 0 : 1}>
          <img src={project.image} alt="project" />
        </ProjectImageContainer>
        <div className="project-desc">
          <div className="project-desc-contents">
            <ProjectTitle color={titleColor}>{project.title}</ProjectTitle>
            <div className="desc">
              <p>{project.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
