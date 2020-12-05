import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; 
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebase from "./config/firebaseConfig";
import {createFirestoreInstance} from 'redux-firestore';
import {useSelector} from 'react-redux';
import {isLoaded} from  'react-redux-firebase';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));

const rrfprops = {
  firebase,
  config : {},
  dispatch : store.dispatch,
  createFirestoreInstance 
}
function AuthIsLoaded({children}){
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth))
  return (
    <div className = "text-center">
      <div className="spinner-grow text-primary" style={{width : "5rem", height : "5rem", marginTop : "22%"}}
      role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  return children
}
ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfprops}>
    <AuthIsLoaded>
      <App />
    </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
