import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/Root';
import './styles/styles.less';

ReactDOM.render(
  <Root/>,
  document.getElementById('application-root')
);
