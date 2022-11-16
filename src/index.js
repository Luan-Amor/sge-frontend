import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <CookiesProvider >
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </CookiesProvider>
      </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);


