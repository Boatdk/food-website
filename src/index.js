import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseConfig from './config/firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import foodReducer from './reducers/foodReducer'

if( firebase.apps.length === 0 ){
  firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const reducers = combineReducers({food: foodReducer})
export const store = createStore(reducers, applyMiddleware(logger, thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
