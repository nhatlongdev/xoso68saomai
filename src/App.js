/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  Item
} from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './component/Main';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      selected: 'mit'
    }
  }

  render() {
    return (
      <Provider store = {store}>
          <Main/>
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
});
