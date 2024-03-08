// import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const image = {uri: 'https://e0.pxfuel.com/wallpapers/975/533/desktop-wallpaper-paper-walls-neon-plants-iphone-phone-galaxy-cool-neon-phone.jpg'};
const imageHome = {uri: 'https://wallpapergod.com/images/hd/home-screen-1125X2000-wallpaper-1k2hbaap436g7s9a.jpeg'};

function RoutNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }}/>
        <Stack.Screen name="Test" component={TestScreen} options={{ title: 'Test screen' }}/>
        <Stack.Screen name="Test2" component={TestScreen2} options={{ title: 'Test screen 2' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen({navigation}) {
  return (
    <View style={[styles.borderHome, styles.container]}>
      <ImageBackground source={imageHome} style={styles.image}>
        <Button title="Go to Test" onPress={() => navigation.navigate('Test')} />
        <Text style={styles.colorWhite}>Home screen</Text>
      </ImageBackground>
    </View>
  )
}

function TestScreen({navigation}) {
  return (
    <View style={[styles.borderTest, styles.container]}>
      {/* <Text style={styles.text}>Test screen</Text> */}
      <ImageBackground source={image} style={styles.image}>
        <Button title="Go to Test 2" onPress={() => navigation.navigate('Test2')} />
        <Text style={styles.colorWhite}>Test screen</Text>
      </ImageBackground>
    </View>
  )
}

function TestScreen2() {
  return (
    <View style={[styles.borderTest, styles.container, styles.colorBackground]}>
      {/* <Text style={styles.text}>Test screen</Text> */}
        <Text style={styles.colorWhite}>Test screen 2</Text>
    </View>
  )
}

export default function App() {
  return (
    <>
      <RoutNavigator />
      {/* <StatusBar style="auto" /> */}
    </>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderHome: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 4,
  },
  borderTest: {
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  colorBackground: {
    backgroundColor: 'green'
  },
  colorBlack: {
    color: 'black'
  },
  colorWhite: {
    color: 'white'
  }
});
