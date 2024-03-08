import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Constants } from 'expo-constants';
import * as Location from 'expo-location';
import { set } from 'date-fns';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';

const API_KEY = (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e4f637759e3d7c5c337fcc999a92334c&lang=fr&units=metric`

export default function App() {
  // 1. recuperer les données du user
  const [loading, setlLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    // Demander la permission d'acceder a la localisation
    const requestPermission = async () => {
      const {status} = await Location.requestForegroundPermissionsAsync();
      console.log(status);

      if(status !== 'granted') {
        alert('Permission refusée');
        return;
      }else {
        await Location.getCurrentPositionAsync({}).then((position) => {
          setlLoading(false);
          setLocation(position);
        });
      }
    }
    requestPermission();
  }, []);

  // 2. realiser une requete vers nos serveur
    // city
    // meteo du moment
    // prevision meteo

  const getWeather = async (location) => {
    try {
      // ATTENTION A NE PAS DEPASSER LES 60 REQUETES PAR MINUTES
      // const getLocation = await axios.get(API_KEY(location.coords.latitude, location.coords.longitude))
      const getLocation = {data: {city: {name: "Elvas"}}}
      console.log("API ok");
      console.log(getLocation.data);
      setDatas(getLocation.data);

    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  useEffect(() => {
    if(!loading ) {
      console.log("loading");
      getWeather(location);
    }
  }, [loading]);
  
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
  return  <View style={styles.container}>
            <Text>Localisation: {datas?.city.name}</Text>
          </View>
      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
