
import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, ScrollView } from "react-native"
import React, { useState } from 'react';

//const image2 = {uri: 'asset:/backsma.png'};

const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    console.log(email, pass);
  } 

  const handleRegister = () => {
    console.log('register');
  } 

  return (
    //<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFEBCD'}}>
    <ScrollView style={styles.scrollView}>
      
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 28,
              color: '#212121',
              marginVertical: 20,
            }}
          >
            {isRegister ? 'Sign in' : 'Login'}
          </Text><View style={styles.loginFormContainer}>
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
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            maxLength={100}
            value={rePass}
            onChangeText={val => setRePass(val)}
            secureTextEntry
          />
        </View>

        {isRegister && <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            maxLength={100}
            value={pass}
            onChangeText={val => setPass(val)}
            secureTextEntry
          />
        </View>
        }
    </View>

        <View style={{height: 20}}/>

    <TouchableOpacity style={styles.buttonLogin} onPress={isRegister ? handleRegister : handleLogin}>
      <Text style={styles.buttonText}>{isRegister ? 'Sign in' : 'Login'}</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
    onPress={() => setIsRegister(!isRegister)}
    style={styles.buttonRegister}>
      <Text>{isRegister ? 'Login' : 'Register'}</Text>      
    </TouchableOpacity>

  </ScrollView>
//</View>
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
  scrollView: {
    backgroundColor: '#FFEBCD',
    marginHorizontal: 30,
  },
});