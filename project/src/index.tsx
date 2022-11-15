import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers-mock';
import { reviews } from './mocks/review-mock';

const Setting = {
  favoritesCount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      favoritesCount={Setting.favoritesCount}
      offers = {offers}
      reviews={reviews}
    />
  </React.StrictMode>,
);
