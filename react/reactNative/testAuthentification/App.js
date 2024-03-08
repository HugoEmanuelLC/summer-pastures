import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from './screens/authentification/register/registerScreen';
import LoginScreen from './screens/authentification/login/loginScreen';
import Home from './screens/home/homeScreen';

import React, { useEffect, useState, createContext } from 'react';

import AdminScreen from './screens/adminScreen';
import UsersScreen from './screens/usersScreen';

const Stack = createNativeStackNavigator();
const {AuthContext} = createContext();

function App() {

  const [isConnected, setIsConnected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isConnected: false,
  //     isAdmin: false,
  //   }
  //   this.handleConnection = this.handleConnection.bind(this);
  //   this.handleIsAdmin = this.handleIsAdmin.bind(this);
  // }

  handleConnection = (value) => {
    // this.setState({ isConnected: value });
    setIsConnected(value);
    console.log("Connected: " + value);
  }

  handleIsAdmin = (value) => {
    // this.setState({ isAdmin: value });
    setIsAdmin(value);
    console.log("Is Admin: " + value);
  }

  useEffect(() => {
    console.log("Connected: " + isConnected);
    console.log("Is Admin: " + isAdmin);
  },[isConnected, isAdmin])

  // render(){
    if (!isConnected) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: true}}>
            <Stack.Screen name="Register" component={RegisterScreen} 
              validateConnection={this.handleConnection}
              validateIsAdmin={this.handleIsAdmin}
            />
            <Stack.Screen name="Login" component={LoginScreen}
              validateConnection={handleConnection}
              validateIsAdmin={handleIsAdmin}
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
  // }
}


export default App;