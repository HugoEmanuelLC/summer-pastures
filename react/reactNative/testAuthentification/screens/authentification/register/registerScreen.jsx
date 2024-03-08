import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';

import registerStyle from './registerStyle.js';
import { account, ID } from '../../../appwrite/config.js';

export default function RegisterScreen({navigation, value, click}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    async function login(email, password) {
        try {
            const promise = await account.createEmailSession(email, password);
            alert('logged')
            value = promise;
            navigation.navigate('Home');
            
        } catch (error) {
            alert("Wrong email or password")
        }
    }
    
    
    const register = async () => {
        try {
            const x = await account.create(ID.unique(), email, password, name);
            login(email, password);
            alert('registered')
        } catch (error) {
            alert('not registered')
            alert(error.message)
        }
    }

    useEffect(() => {},[name, email, password])

    return (
        <View style={registerStyle.container}>
            <Text style={registerStyle.text}> Register screen </Text>

            <TextInput placeholder='votre nom' style={registerStyle.input} 
                    onChangeText={setName} 
            />
            <TextInput placeholder='Adresse e-mail' style={registerStyle.input} 
                    onChangeText={setEmail}
                    textContentType='emailAddress' 
            />
            <TextInput placeholder='Mot de passe' style={registerStyle.input} 
                    autoCorrect={false} onChangeText={setPassword} 
                    secureTextEntry={true} textContentType='password'
            />

            <Pressable onPress={register} style={registerStyle.btnSubmit}>
                <Text style={registerStyle.color}> Register </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Login')} style={registerStyle.btnChangeLogin}>
                <Text style={registerStyle.color2}> Deja un compte? Logue vous ! </Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('Home')} style={registerStyle.btnSubmit}>
                <Text style={registerStyle.color}> 
                    home
                </Text>
            </Pressable>
        </View>
    )
}