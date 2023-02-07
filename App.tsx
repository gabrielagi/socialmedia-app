import { Component } from 'react';
import React from 'react';
import SwitchNavigator from './navigation/LoginNavigator'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
//import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/index'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator/>
      </Provider>
    )}
    }