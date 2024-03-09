import { useEffect, useContext } from 'react';
import { View, Text} from 'react-native';

import { account } from '../../appwrite/config.js';
import {AuthContext} from '../../App.js';


function VerifSession({navigation}) {
    const { handleConnection, handleIsAdmin} = useContext(AuthContext);

    const verifSession = async () => {
        try {
            await account.get("current")
            alert("deja connecter")
            handleConnection(true)
            handleIsAdmin(false)
        } catch (error) {
            alert("pas connecter")
            navigation.navigate('Login')
        }
    }

    useEffect(()=>{
        verifSession()
    },[])

    return (
        <View>
            <Text> Chargement ... </Text>
        </View>
    )
}

export default VerifSession