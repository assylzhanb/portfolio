import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
let pageTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come back here';
});
window.addEventListener('focus', () => {
  document.title = pageTitle;
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





