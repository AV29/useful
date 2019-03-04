import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import React, { Suspense } from 'react';
import Root from './components/Root';
import i18n from './i18n';
import './styles/styles.less';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div/>}>
      <Root/>
    </Suspense>
  </I18nextProvider>,
  document.getElementById('application-root')
);
