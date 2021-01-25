import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';


ReactDOM.render(
  <ThemeProvider>
    <App />
    </ThemeProvider>,
  document.getElementById('root')
);

