import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CardOffers } from './mocks/card-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  cardsAmount: 8,
  cardOffers: CardOffers
};

root.render(
  <React.StrictMode>
    <App offers={Settings.cardOffers}/>
  </React.StrictMode>
);
