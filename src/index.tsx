import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  cardsAmount: 6
}

root.render(
  <React.StrictMode>
    <App cardsAmount={Settings.cardsAmount}/>
  </React.StrictMode>
);
