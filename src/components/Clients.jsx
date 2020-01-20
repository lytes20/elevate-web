import React from 'react';
import '../assets/styles/clients.scss';
import { clientLogos } from '../assets';

export default function Clients() {
  return (
    <div className="clients-container">
      <div className="cards-container">
        {[1, 2].map((clientLogo, index) => (
          <div key={index} className="client-card">
            <img src={clientLogos} alt="clientLogos" />
          </div>
        ))}
      </div>
    </div>
  );
}
