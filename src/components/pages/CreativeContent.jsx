import React from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/pages/btlpage.scss';
import { mediaImage } from '../../assets';
import { BTLTags } from '../../utils/constants';
import { DescContainer } from '../shared';

export default class BTLPage extends React.Component {
  constructor(props) {
    super(props);
    this.btlImage = null;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.btlImage = document.querySelector('.btl-image');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.btlImage.style.transform = `scale(${window.pageYOffset / 1500})`;
  };
  render() {
    return (
      <div className="pages btl-page-container">
        <div>
          <div className="pages-main">
            <div className="mascot-image-container btl-content">
              <img src={mediaImage} alt="media" className="btl-image" />
            </div>
            <div className="btl-text-container btl-content">
              <h2 className="btl-h2">Creative Content</h2>
              <DescContainer>
                <p className="btl-p">
                  Mining deep into our minds to create value for our clients through “out of the box” ideas is our greatest joy. We aim at
                  effectively communicating your ideas through Creative Design & Storytelling.
                </p>
              </DescContainer>

              <Link to="/creative-content" className="see-more-button btl-btn">
                see more
              </Link>
            </div>
          </div>

          <div className="btl-tags-container">
            <ul>
              {BTLTags.map(tag => (
                <li key={tag}>
                  <p className="btl-tags">{tag}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
