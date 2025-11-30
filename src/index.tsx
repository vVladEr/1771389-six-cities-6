import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FullOffers } from './mocks/full-offers';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  cardsAmount: 8,
  fullOffers: FullOffers
};

root.render(
  <React.StrictMode>
    <App  offers={Settings.fullOffers}/>
  </React.StrictMode>
);
