
import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity } from "react-native"
import React, { useState } from 'react';

//const image2 = {uri: 'asset:/backsma.png'};

const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = () => {
    console.log(email, pass);
  } 

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFEBCD'}}>
      <View style={styles.loginFormContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={val => setEmail(val)}
            maxLength={100}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            maxLength={100}
            value={pass}
            onChangeText={val => setPass(val)}
            secureTextEntry
          />
        </View>
    </View>
    <TouchableOpacity style={styles.buttonLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => setIsRegister(true)}
    style={styles.buttonRegister}>
      <Text>Register</Text>      
    </TouchableOpacity>


  </View>
  
);
}

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },

  loginFormContainer: {
    width: Dimensions.get('window').width - 40,
  },

  inputContainer: {
    marginTop: 8,
    marginBottom: 16,
  },

  inputLabel: {
    fontWeight: '500',
    color: '#212121',
    fontSize: 16,
  },

  input: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 8,
    padding: 10,
    borderRadius: 100,
    minHeight: 40,
  },

  buttonLogin: {
    height: 40,
    backgroundColor: 'coral',
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#fafafa',
  },

  buttonRegister: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});