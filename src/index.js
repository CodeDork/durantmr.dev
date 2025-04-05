import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this for React 18
import App from './App';  // Import the App component
import './styles.css';  // Import Tailwind and custom styles

// This is where React is rendered to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
