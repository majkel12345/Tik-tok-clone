import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyBca0y3-9bePPLCDKbk1wrPnP_HWmqbyrM",
    authDomain: "tik-tok-clone-5bb55.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-5bb55.firebaseio.com",
    projectId: "tik-tok-clone-5bb55",
    storageBucket: "tik-tok-clone-5bb55.appspot.com",
    messagingSenderId: "263919437903",
    appId: "1:263919437903:web:e7bf633a5c6eebf634c23a"

};

const DATABASE_URL = firebaseConfig.databaseURL;

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


export default DATABASE_URL