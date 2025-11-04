import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  cardsAmount: 8,
  offers: Offers
};

root.render(
  <React.StrictMode>
    <App offers={Settings.offers}/>
  </React.StrictMode>
);
