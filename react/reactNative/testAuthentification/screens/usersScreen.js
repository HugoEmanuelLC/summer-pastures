import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './user/homeUserScreen';
import Page1 from './user/page1UserScreen';

const Stack = createNativeStackNavigator();

function UsersScreen({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}} >
            <Stack.Screen name="Home" component={Home} 
                options={{ title: 'Home' }} 
            />
            <Stack.Screen name="Page1" component={Page1} />
        </Stack.Navigator>
    );
}

export default UsersScreen;