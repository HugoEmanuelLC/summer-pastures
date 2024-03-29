import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';

import {AuthContext} from '../../../App.js';

import loginStyle from './loginStyle.js';
import { account } from '../../../appwrite/config.js';

export default function LoginScreen({navigation, route}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { handleConnection, handleIsAdmin} = useContext(AuthContext);
    
    const login = async () => {
        if (!email || !password) {
            alert("Please fill in all the fields!");
        } else {
            try {
                const promise = await account.createEmailSession(email, password)
                alert('logged')
                handleConnection(true)
    
            } catch (error) {
                alert("Wrong email or password")
                alert(error.message)
            }
        }
    }

    const handleDeleteSession = async () => {
        try {
            await account.deleteSession('current');
            alert('logged out')
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {},[email, password])

    return (
        <View style={loginStyle.container}>
            <Text style={loginStyle.text}> Login screen </Text>

            <TextInput placeholder='Adresse e-mail' style={loginStyle.input} 
                    value={email} onChangeText={setEmail} 
                    textContentType='emailAddress' 
            />
            <TextInput placeholder='Mot de passe' style={loginStyle.input} 
                    value={password} onChangeText={setPassword} 
                    secureTextEntry={true} textContentType='password'
            />

            <Pressable onPress={login} style={loginStyle.btnSubmit}>
                <Text style={loginStyle.color}> Login </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Register')} style={loginStyle.btnChangeLogin}>
                <Text style={loginStyle.color2}> Pas encore de compte? Registre vous ! </Text>
            </Pressable>

            <Pressable onPress={handleDeleteSession} style={loginStyle.btnSubmit}>
                <Text style={loginStyle.color}> Ecraser connection </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Home')} style={loginStyle.btnSubmit}>
                <Text style={loginStyle.color}> Home </Text>
            </Pressable>
        </View>
    )
}