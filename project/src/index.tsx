import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  favoritesCount: 5,
} as const;

root.render(
  <React.StrictMode>
    <App
      favoritesCount={Setting.favoritesCount}
    />
  </React.StrictMode>,
);
