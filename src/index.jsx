import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/theme/globalStyle';

const rootDirectory = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <span>Hello World!</span>
  </>,
  rootDirectory
);
