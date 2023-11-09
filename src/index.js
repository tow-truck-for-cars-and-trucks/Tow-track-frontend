import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import './app/styles/fonts.css';
import App from './app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
