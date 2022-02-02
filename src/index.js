
//==========================================================================
//                          Imports and requires
//==========================================================================


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import { Provider } from 'react-redux';
import TokenReducer from './features/Token'


//==========================================================================
//                          Redux Store
//==========================================================================


const store = configureStore({
    // we want to have a reducer for each state of the application
    reducer: {
      token:TokenReducer,
    },
  });


//==========================================================================
//                          Rendering the DOM element
//==========================================================================


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
