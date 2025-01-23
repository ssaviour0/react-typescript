import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 경로가 './App'인지 확인
import reportWebVitals from './reportWebVitals'; // 경로가 './reportWebVitals'인지 확인

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
