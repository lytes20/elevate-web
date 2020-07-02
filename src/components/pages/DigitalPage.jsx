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
                Interested in building a clientele in the digital space! Entrust us to grow your digital family on all platforms possible,
                keenly following it up to ensure continuous growth and success.
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
