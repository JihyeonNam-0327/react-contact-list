import React from 'react';
import ReactDOM from 'react-dom';
// main app applied route
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js'
// service worker
import * as serviceWorker from './serviceWorker';

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
