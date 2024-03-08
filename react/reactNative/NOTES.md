# REACT NATIVE:

### Installation:

***...avec Expo***

Expo est une plateforme et framework pour les applications React.

Ensemble de ouitils et services construits au tour de React Native et de plateformes Natives qui aide à développer, créer, déployer sur Ios, Android, web à partir du même codebase JavaScript / TypeScript.

Créez un projet JavaScript/TypeScript qui s'exécute de manière native sur tous les appareils de vos utilisateurs.

- npx create-expo-app
- npx create-expo-app myApp
- npx create-expo-app@latest myApp
- npx create-expo-app --template
- npx create-expo-app --template blank

***...installation importantes***
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack
    ```js
    const Stack = createNativeStackNavigator();
    ```
- npm install @react-navigation/native
    ```js
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }}/>
        <Stack.Screen name="Test" component={TestScreen} options={{ title: 'Test screen' }}/>
        <Stack.Screen name="Test2" component={TestScreen2} options={{ title: 'Test screen 2' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    ```

### Lancer projets, commande:

- depuis la maison --> npx expo start 
- depuis un réseau avec restriction --> npx expo start --tunnel

### Run web aussi:

- npm install react-native-web@~0.19.6 react-dom@18.2.0 @expo/metro-runtime@~3.1.3

### On / off firewall:

- netsh advfirewall set currentprofile state off
- netsh advfirewall set currentprofile state on
