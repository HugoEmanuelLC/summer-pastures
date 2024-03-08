import homeStyle from './homeStyle';
import { Text, View, Button } from 'react-native';
import { account } from '../../appwrite/config.js';


export default function Home({ navigation ,route}) {

    const handleDeleteSession = async () => {
        await account.deleteSession('current');
        navigation.navigate('Login');
    }

    return (
        <View style={homeStyle.container}>
            <Text style={homeStyle.text}> Home screen </Text>
            <Button onPress={handleDeleteSession} title="Logout" />
        </View>
    )
}