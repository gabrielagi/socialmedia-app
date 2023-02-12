import React from "react";
import App from '../App';
import { createRoot } from 'react-dom/client';


import Login from '../screens/AuthScreens/Login'
import { Provider } from 'react-redux'
import store from "./store";

const container = document.getElementById('app');
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Login/>
    </Provider>
    <Login/>
    <App />
  </React.StrictMode>

);