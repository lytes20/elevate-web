import React from 'react';
import { btlTextImage } from '../../assets';
import '../../assets/styles/details/common.scss';
import '../../assets/styles/details/btldetails.scss';

import Footer from '../Footer';
import Header from '../Header';

const BTLDetails = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="details-header btl-header">
          <div className="details-header-image-container">
            <img height="167px" src={btlTextImage} alt="text btl" className="btl-text-image" sizes="(max-width: 345px) 100vw, 345px" />
          </div>
        </div>
        <div>
          <p>
            We specialize in creating unique concepts for our clients, thanks to our handling in large events, we have the confidence and
            security of offering them the best service. We have, in our staff, account executives, art directors, creative directors and
            long-running executive producers
          </p>
        </div>
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
};

export default BTLDetails;
