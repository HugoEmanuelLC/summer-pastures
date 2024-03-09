import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VerifSession from './screens/authentification/verifSession';
import RegisterScreen from './screens/authentification/register/registerScreen';
import LoginScreen from './screens/authentification/login/loginScreen';

import React, { useEffect, useState, createContext } from 'react';

import AdminScreen from './screens/admin/adminScreen';
import UsersScreen from './screens/user/usersScreen';

const Stack = createNativeStackNavigator();
export const AuthContext = createContext();

function App(){

  const [isConnected, setIsConnected] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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


  // return(
  //   <AuthContext.Provider value={{isConnected, isAdmin, handleConnection, handleIsAdmin}}>
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: true}}>
  //         <Stack.Screen name="Register" component={RegisterScreen} />
  //         <Stack.Screen name="Login" component={LoginScreen} />
  //         <Stack.Screen name="Home" component={Home} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </AuthContext.Provider>
  // )



  // render(){
    if (!isConnected) {
      return (
        <AuthContext.Provider value={{handleConnection, handleIsAdmin}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="VerifSession" screenOptions={{headerShown: true}}>
              <Stack.Screen name='VerifSession' component={VerifSession} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Login" component={LoginScreen} /> 
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      );
      
    }
  
    return (
      <AuthContext.Provider value={{handleConnection, handleIsAdmin}}>
        <NavigationContainer>
          {isAdmin ? <AdminScreen /> : <UsersScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  // }
}


export default App;