import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CardOffers } from './mocks/card-offers';
import { FullOffers } from './mocks/full-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  cardsAmount: 8,
  cardOffers: CardOffers,
  fullOffers: FullOffers
};

root.render(
  <React.StrictMode>
    <App cardOffers={Settings.cardOffers} fullOffers={Settings.fullOffers}/>
  </React.StrictMode>
);
