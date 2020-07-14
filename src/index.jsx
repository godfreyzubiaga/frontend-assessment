import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/theme/globalStyle';
import App from './pages/App';

const rootDirectory = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootDirectory
);
