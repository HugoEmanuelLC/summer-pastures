import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from './screens/authentification/register/registerScreen';
import LoginScreen from './screens/authentification/login/loginScreen';
import Home from './screens/home/homeScreen';

import React, { useEffect, useState } from 'react';

import AdminScreen from './screens/adminScreen';
import UsersScreen from './screens/usersScreen';

const Stack = createNativeStackNavigator();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      isAdmin: false,
    }
  }

  handleConnection = (value) => {
    this.setState({ isConnected: value });
  }

  handleIsAdmin = (value) => {
    this.setState({ isAdmin: value });
  }

  render(){
    if (!isConnected) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Register" component={RegisterScreen} 
              validateConnection={this.handleConnection}
              validateIsAdmin={this.handleIsAdmin}
            />
            <Stack.Screen name="Login" component={LoginScreen}
              validateConnection={this.handleConnection}
              validateIsAdmin={this.handleIsAdmin}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
      
    }
  
    return (
        <NavigationContainer>
          {isAdmin ? <AdminScreen /> : <UsersScreen />}
        </NavigationContainer>
    );
  }
}


export default App;