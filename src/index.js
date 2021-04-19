/**
 @name:Index
 @type:React Component
 @param:none
 @returns: JSX of Index of User details
 @functionality : We add Over React app to index.html
**/

// Imports
// ====================================
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {AppProvider} from './Components/context'
// ====================================


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals();
