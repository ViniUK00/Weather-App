import { View, Text, SafeAreaView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getWeather } from '../api/fetchWeatherData';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedPlace, setSelectedPlace } from '../redux/slices/locationSlice';
import { Weather } from '../types/WeatherApiResponse'
import * as Location from 'expo-location';
import WeatherCard from '../components/WeatherCard';
import { styles } from '../../stylesheet';
import { MaterialIcons } from '@expo/vector-icons';
import Loading from '../components/Loading';
import ExtraInfoCard from '../components/ExtraInfoCard';

const HomeScreen = () => {

  const dispatch = useDispatch();
  const selectedPlace = useSelector(selectSelectedPlace);
  
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const lat = selectedPlace?.location.lat;
  const lng = selectedPlace?.location.lng;
  const [weatherData, setWeatherData] = useState<Weather | undefined>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(lat, lng);
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [lat, lng]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const useCurrentLocationHandler = async () => {
    if (location?.coords) {
      try {
        const data = await getWeather(location.coords.latitude, location.coords.longitude);
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(selectedPlace);
  
  return (
    <SafeAreaView>
      <View style={styles.searchAndIconContainer}>
      <GooglePlacesAutocomplete
        placeholder={'Search for a city'}
        styles={{
          container:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft:40,
          paddingRight:40,
          padding:5,
        }
        ,textInput: {
        fontSize: 18,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#d1d1d1',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft:40,
        shadowOpacity:0.2
      },}}
        onPress={(data, details = null) => {
          console.log(details?.geometry.location);

          dispatch(
            setSelectedPlace({
              location: details?.formatted_address,
            })
          );
          //dispatch(setSelectedPlace(null));
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <Pressable onPress={useCurrentLocationHandler} style={styles.icon_usemylocation}>
      <MaterialIcons name="my-location" size={30} color='gray' />
      </Pressable>
      </View>
      <View style={styles.card}>
        {weatherData?<WeatherCard city={selectedPlace?.location} temperature={weatherData?.current.temp} condition={weatherData?.current.humidity}  />: <Loading />}
      </View>
      <View style={styles.secondary_card}>
      {weatherData?<ExtraInfoCard city={selectedPlace?.location} temperature={weatherData?.current.temp} condition={weatherData?.current.humidity}  />: <Loading />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
