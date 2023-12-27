import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { YMaps } from '@pbe/react-yandex-maps';
import ReactDOM from 'react-dom/client';
import store from './app/model/store';
import './app/styles/index.scss';
import App from './app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <YMaps query={{ apikey: '1ee01d48-3b19-4a3a-9404-e941518cc578' }}>
        <App />
      </YMaps>
    </Provider>
  </BrowserRouter>
);
