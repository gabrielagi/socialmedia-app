import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default class Signup extends React.Component {

  render() {
    return (
      <View style={{
        flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center',
    }}>
       <Text>
        SignUp Page
       </Text>
      </View>
    )}
    }