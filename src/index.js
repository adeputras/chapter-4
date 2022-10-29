import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './assets/css/bootstrap.css';
import './assets/css/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="https://adeputras.github.io/chapter-4">
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

