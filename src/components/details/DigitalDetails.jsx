import React from 'react';
import { digitalTextImage } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/digitaldetails.scss';

import Footer from '../Footer';
import Header from '../Header';

const DigitalDetails = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="details-header digital-header">
          <div className="details-header-image-container">
            <img src={digitalTextImage} alt="text digital" />
          </div>
        </div>
        <div className="details-text-container">
          <p>
            The digital medium is the platform where your brand can create the most connections, so we have adopted the way to distribute
            content via mobile, social and web to give them the best experience with your brand.
          </p>
          <p>
            At Elevate, we simultaneously manage the main digital platforms, generating and disseminating relevant brand information for the
            consumer, and profiting their strategies. Doing things right, right now, is essential.{' '}
          </p>
        </div>
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
};

export default DigitalDetails;
