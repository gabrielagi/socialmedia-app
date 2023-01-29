import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {

  state = {
    niceNumber: 0
  }

  adding = () => {
    this.setState({niceNumber: this.state.niceNumber+1})
  }
  
  substract = () => {
    this.setState({niceNumber: this.state.niceNumber-1})
  }
  
  setToZero = () => {
    this.setState({niceNumber: 0})
  }

  render() {
    return (
      <View style={{
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    }}>
       <Text>
        Here
       </Text>
      </View>
    )}
    }