import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import * as actions from "./redux/counter/counter-actions";

console.log(store.getState())

console.log(store.dispatch(actions.increment(20)))

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
