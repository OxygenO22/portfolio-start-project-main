import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ConstantsStyles } from './components/styles/ConstantsStyles';
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ConstantsStyles}>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
