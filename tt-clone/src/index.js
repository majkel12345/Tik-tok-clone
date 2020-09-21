import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyDj5zbZ4CaOz8Z33aQyuBozG3pfA2Cvg88",
  authDomain: "tik-tok-clone-26a1a.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-26a1a.firebaseio.com",
  projectId: "tik-tok-clone-26a1a",
  storageBucket: "tik-tok-clone-26a1a.appspot.com",
  messagingSenderId: "376846347286",
  appId: "1:376846347286:web:acf77b63d4c1c613749937"
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