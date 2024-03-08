import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './admin/homeAdminScreen';
import Page1 from './admin/page1AdminScreen';

const Stack = createNativeStackNavigator();

function AdminScreen({validateConnection, validateIsAdmin}) {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}} >
            <Stack.Screen name="Home" component={Home} 
                options={{ title: 'Home' }} 
            />
            <Stack.Screen name="Page1" component={Page1} />
        </Stack.Navigator>
    );
}

export default AdminScreen;