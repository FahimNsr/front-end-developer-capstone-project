import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Load API script if not already loaded
if (!window.fetchAPI) {
  fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
    .then(response => response.text())
    .then(scriptContent => {
      const modifiedScript = scriptContent
        .replace(/const fetchAPI = /g, 'window.fetchAPI = ')
        .replace(/const submitAPI = /g, 'window.submitAPI = ')
        .replace(/const seededRandom = /g, 'window.seededRandom = ');
      eval(modifiedScript);
    })
    .catch(() => {});
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
