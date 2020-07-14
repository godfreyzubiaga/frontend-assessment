import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import 'antd/dist/antd.css';
import './index.scss';

const rootDirectory = document.getElementById('root');

ReactDOM.render(
  <>
    <App />
  </>,
  rootDirectory,
);
