import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from './Halpper/context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
