import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ConstantsStyles } from './components/styles/ConstantsStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ConstantsStyles}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
