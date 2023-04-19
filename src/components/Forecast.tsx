import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedPlace } from '../redux/slices/locationSlice'
import { ForecastRes } from '../types/ForecastApiResponse'
import { getForecast } from '../api/fetchWeatherData'
import moment from 'moment'
import { LinearGradient } from 'expo-linear-gradient'

const Forecast = () => {
  const location = useSelector(selectSelectedPlace)

  const [forecastData, setForecastData] = useState<ForecastRes | undefined>();
  
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getForecast(location.location.lat || location.location.latitude, location.location.lng || location.location.latitude);
        setForecastData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  },[location.location.lat || location.location.latitude, location.location.lng || location.location.latitude]);

const day = moment(forecastData?.list?.[0]?.dt_txt).format('dddd');
const icon = forecastData?.list?.[0]?.weather?.[0]?.icon;
const minTemp = ((forecastData?.list?.[0]?.main?.temp_min || 0) - 273.15).toFixed(0);
const maxTemp = ((forecastData?.list?.[0]?.main?.temp_max || 0) - 273.15).toFixed(0);

const day2 = moment(forecastData?.list?.[8]?.dt_txt).format('dddd');
const icon2 = forecastData?.list?.[8]?.weather?.[0]?.icon;
const minTemp2 = ((forecastData?.list?.[8]?.main?.temp_min || 0) - 273.15).toFixed(0);
const maxTemp2 = ((forecastData?.list?.[8]?.main?.temp_max || 0) - 273.15).toFixed(0);


  return (
    <LinearGradient colors={['#3f51b5', '#7986cb']} style={styles.container} >
      <View style={styles.containerDay}>
        <Text style={styles.textDat}>{day}</Text>
        <Text style={styles.textDat}>{day2}</Text>
      </View>
      <View style={styles.containerIcon}>
      <Image
            style={styles.weatherIcon}
            source={{
              uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
          />
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `https://openweathermap.org/img/wn/${icon2}@2x.png`,
            }}
          />
      </View>
      <View style={styles.containerTemp}>
        <Text style={styles.textTemp}>{minTemp}° - {maxTemp}°</Text>
        <Text style={styles.textTemp}>{minTemp2}° - {maxTemp2}°</Text>
      </View>
      
    </LinearGradient>
    
  )
}

export default Forecast

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    alignContent:'center',
    justifyContent: 'center',
    height:'40%',
    display:'flex',
    flexDirection:'row',
    borderRadius:30,
    width:'90%'
  },
  containerDay: {
  },
  textDat:{
    color: 'white',
    marginHorizontal:20,
    marginRight:40,
    fontWeight:'600',
    marginTop:20
  },
  containerTemp:{
  },
  textTemp:{
    color: 'white',
    marginHorizontal:20,
    marginLeft:70,
    fontWeight:'600',
    marginTop:20
  },
  containerIcon:{

  },
  weatherIcon: {
    height: 50,
    width: 50,
  },
});