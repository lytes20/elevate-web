import React from 'react';
import { brandingTextBanner } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/brandingdetails.scss';

import Footer from '../Footer';
import Header from '../Header';

const BrandingDetails = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="details-header branding-header">
          <div className="details-header-image-container">
            <img src={brandingTextBanner} alt="text branding" />
          </div>
        </div>
        <div>
          <p>
            At Elevate we take care of the creation, construction and development of the brand, we know that each one is different, and that
            is why it is important to know that it differentiates them from the others. We define the brand personality, its DNA, which we
            develop by giving it an identity and creating creative ATL campaigns to achieve a sustainable positioning over time.
          </p>
          <p>
            Our purpose is to accompany you on this path, anticipating the trends to strengthen your brand from the strategic approach,
            launch and constant maintenance in the market through:
          </p>
        </div>
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
};

export default BrandingDetails;
