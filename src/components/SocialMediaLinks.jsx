import React from 'react';
import '../assets/styles/socialmedialinks.scss';
import { facebookIcon, instagramIcon, twitterIcon } from '../assets';

export default function SocialMediaLinks() {
  function createData(name, url, icon) {
    return { name, url, icon };
  }
  const elevateSocialMediaPlatforms = [
    createData('Facebook', 'https://web.facebook.com/elevate_ug-111700057002254/', facebookIcon),
    createData('Instagram', 'http://instagram.com/elevate_ug', instagramIcon),
    createData('Twitter', 'https://twitter.com/UgElevate', twitterIcon)
  ];
  return (
    <div>
      <ul className="social-media-links">
        {elevateSocialMediaPlatforms.map((socialMedia, index) => (
          <li key={index} className="social-media-link-container">
            <div>
              <a href={socialMedia.url} target="_blank">
                <img src={socialMedia.icon} alt={socialMedia.name} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
