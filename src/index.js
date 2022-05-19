import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9uoLtaob2nireDI1JWPn6huz1KP2TJfw",
  authDomain: "cosmetics-3ad34.firebaseapp.com",
  projectId: "cosmetics-3ad34",
  storageBucket: "cosmetics-3ad34.appspot.com",
  messagingSenderId: "663616157512",
  appId: "1:663616157512:web:e0891bffcf4711e7ab657d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
