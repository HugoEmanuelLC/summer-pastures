import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, Pressable } from "react-native";

import { account } from '../../../appwrite/config.js';
import { AuthContext } from '../../../App.js';

function HomeUserScreen({ navigation }) {
    const { handleConnection, handleIsAdmin} = useContext(AuthContext);

    const handleDeleteSession = async () => {
        try {
            await account.deleteSession('current');
            alert('logged out')
            handleConnection(false)
            handleIsAdmin(false)

        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {},[])

    return <View>
        <Text>Home Screen user</Text>
        <Button
            title="Go to page 1 of user"
            onPress={() => navigation.navigate("Page1")}
        />
        <Pressable onPress={handleDeleteSession} >
            <Text > Ecraser connection </Text>
        </Pressable>
    </View>
}


export default HomeUserScreen;