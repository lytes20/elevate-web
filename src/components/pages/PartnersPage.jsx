import React from 'react';

import { Link } from 'react-router-dom';

import Clients from '../Clients';

import '../../assets/styles/pages/partnerpage.scss';

export default function PartnersPage() {
  function createData(id, name, path, imageUrl) {
    return { id, name, path, imageUrl };
  }
  const latestProjects = [
    createData(
      'one',
      'UI UX',
      '/ui-ux',
      'https://images.unsplash.com/photo-1579130589334-31c6414eafdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
    ),
    createData(
      'two',
      'Creative Content',
      '/creative-content',
      'https://images.unsplash.com/photo-1578874619862-55fc955ad118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ),
    createData(
      'three',
      'Social Media management',
      '/social-media-management',
      'https://images.unsplash.com/photo-1579121477063-4026649ad6d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    )
  ];
  return (
    <div className="portfolio-container">
      <div className="latest-projects">
        <p className="portfolio-title">LATEST PROJECTS</p>
        <div className="projects-container">
          {latestProjects.map((latestProject, index) => (
            <div key={index} className="project-container">
              <img src={latestProject.imageUrl} alt={latestProject.id} />
              <div className={`project-div ${latestProject.id}-div`}>
                <Link to={latestProject.path}>{latestProject.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="clients">
        <p className="portfolio-title">THEY TRUSTED US</p>
        <Clients />
      </div>
    </div>
  );
}
