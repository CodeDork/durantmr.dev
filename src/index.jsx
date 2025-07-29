import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Import your global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Matches the <div id="root"></div> in index.html
);