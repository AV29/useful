import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import './styles/styles.less';

ReactDOM.render(
  <App/>,
  document.getElementById('application-root')
);
