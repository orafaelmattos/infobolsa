import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextApi from '../src/contexts/contextApi.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>
);

