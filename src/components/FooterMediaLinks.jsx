import React from 'react';
import '../assets/styles/footermedialinks.scss';
import { footerFacebookIcon, footerInstagramIcon, footerTwitterIcon } from '../assets';

export default function FooterMediaLinks() {
  function createData(name, url, icon) {
    return { name, url, icon };
  }
  const elevateSocialMediaPlatforms = [
    createData('Facebook', 'https://web.facebook.com/elevate_ug-111700057002254/', footerFacebookIcon),
    createData('Instagram', 'http://instagram.com/elevate_ug', footerInstagramIcon),
    createData('Twitter', 'https://twitter.com/UgElevate', footerTwitterIcon)
  ];
  return (
    <ul className="footer-social-media-links">
      {elevateSocialMediaPlatforms.map((socialMedia, index) => (
        <li key={index} className="footer-social-media-link-container">
          <div>
            <a href={socialMedia.url} target="_blank">
              <img src={socialMedia.icon} alt={socialMedia.name} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
