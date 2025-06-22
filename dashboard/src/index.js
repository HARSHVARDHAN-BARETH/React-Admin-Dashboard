import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';
import './index.css';
import { ThemeProvider } from '../src/components/theme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);