import React from 'react';
import '../../assets/styles/pages/btlpage.scss';
import { mediaImage } from '../../assets';
import { BTLTags } from '../../utils/constants';

export default function BTLPage() {
  return (
    <div className="pages btl-page-container">
      <div>
        <div className="pages-main">
          <div className="mascot-image-container btl-content">
            <img src={mediaImage} alt="media" />
          </div>
          <div className="btl-text-container btl-content">
            <h2 className="btl-h2">BTL</h2>
            <div className="pages-p-container">
              <p className="btl-p">
                We specialize in creating unique concepts for our clients, thanks to our handling in large events, we have the confidence
                and security of offering them the best service. We have, in our staff, account executives, art directors, creative directors
                and long-running executive producers.
              </p>
            </div>

            <button className="see-more-button btl-btn">see more</button>
          </div>
        </div>

        <div className="btl-tags-container">
          <ul>
            {BTLTags.map(tag => (
              <li key={tag}>
                <p className="btl-tags">
                  {tag}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
