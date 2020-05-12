import React from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/pages/creativecontent.scss';
import { mediaImag, creativeProductionImage } from '../../assets';
import { BTLTags } from '../../utils/constants';

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
    // this.btlImage.style.transform = `scale(${window.pageYOffset / 1500})`;
  };
  render() {
    return (
      <div className="UIUX-container CreativeContent">
        <div className="UIUX-content">
          <div className="UIUX-image-container">
            <img src={creativeProductionImage} alt="ui-ux" />
          </div>
          <div className="UIUX-wording-container">
            <div>
              <h2 className="UIUX-h2 CreativeContent-h2">
                <span className="creative">Creative</span> & <span className="digital">Digital</span> Content
              </h2>
              <div className="UIUX-desc-container">
                <p className="UIUX-desc  CreativeContent-desc">
                  We take care of the creation, construction and development of the brand, we know that each one is different, so it is
                  important to know that essence that makes them different from the others. Finding the DNA of your brand is our purpose.
                </p>
              </div>
              <Link className="see-more-button CreativeContent-see-more-btn" to="/ui-ux">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
