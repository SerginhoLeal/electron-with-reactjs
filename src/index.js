import React from 'react';
import ReactDOM from 'react-dom';
import './GlobalStyles.css';
import Routes from './routes/index.routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
