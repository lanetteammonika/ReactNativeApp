/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import reducers from './src/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native

import Navigator from './src/navigator'

const config = {
    key: 'primary',
    storage
}

const reducer = persistCombineReducers(config, { reducers })
const store = createStore(reducer, applyMiddleware(logger))
persistStore(
    store,
    null,
    () => {
        store.getState() // if you want to get restoredState
    }
)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
                <Navigator />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
