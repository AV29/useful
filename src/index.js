import '@babel/polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/top-level/app/App';
import configureStore from './store/configureStore';
import i18n from './i18n';
import './styles/styles.less';

const store = configureStore();

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </I18nextProvider>,
  document.getElementById('application-root')
);
