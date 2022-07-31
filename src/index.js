import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <CookiesProvider >
          <App />
        </CookiesProvider>
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
