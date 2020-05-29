import React from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/pages/commonpages.scss';
import '../../assets/styles/pages/digitalpage.scss';
import { digitalImage } from '../../assets';
import { digitalTags } from '../../utils/constants';
import { DescContainer } from '../shared';

export default function DigitalPage() {
  return (
    <div className="pages digital-page-container">
      <div>
        <div className="pages-main">
          <div className="page-title-container pages-content">
            <h2 className="digital-h2">Social Media Management</h2>
            <DescContainer>
              <p className="digital-p">
                We carry out social media, SEO (web positioning), SEM, corporate website design, online stores and we enhance your social
                networks with the latest graphic design techniques and tools, to respond to the user experience.
              </p>
            </DescContainer>

            <Link to="/social-media-management" className="see-more-button digital-btn">
              see more
            </Link>
          </div>
          <div className="pages-image-container pages-content">
            <img src={digitalImage} alt="digital" />
          </div>
        </div>
        <div style={{ margin: '40px auto' }} className="pages-tags-container digital-tags-container">
          <ul>
            {digitalTags.map(tag => (
              <li key={tag}>
                <p className="digital-tags">{tag}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
