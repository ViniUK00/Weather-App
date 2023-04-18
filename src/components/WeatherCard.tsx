// WeatherCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, PanResponder } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface WeatherCard {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    temp: number;
    feels_like: number;
    humidity: any;
    uvi: number;
    weather: WeatherCardProps;
  };
}
interface WeatherCardProps {
  city: string;
  temp: number;
  feels_like: number;
  main: string;
  icon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ icon, temp, feels_like, main }) => {
  
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#3f51b5', '#7986cb']} style={styles.backround}>
        <View>
          
        </View>
        <View style={styles.weatherIcon}>
          <Image
        style={styles.weatherIcon}
        source={{
          uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        }}
      />
            <Text style={styles.Condition_Text}>{main}</Text>
        </View>
      <View style={styles.temperature}>
        <Text style={styles.temperature_text}>{`${(temp - 273.15).toFixed(0)}°`}</Text>
      </View>
      <View style={styles.feels_like_container}>
      <Text style={styles.feels_like_text}>{`Feels like ${(feels_like - 273.15).toFixed(0)}°`}</Text>
      </View>
      
    </LinearGradient>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container:{
    width:'91%',
    height:'25%',
    alignItems: 'center',
  },
  backround:{
    justifyContent:'flex-start',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%',
    borderRadius:30,
  },
  temperature: {
    position: 'absolute',
    top:0,
    right:0,
    padding:15
  },
  temperature_text:{
    fontSize:60,
    fontWeight:'bold',
    color:'white',
  },
  feels_like_container: {
    position: 'absolute',
    bottom:0,
    right:0,
    padding:20
  },
  feels_like_text: {
    fontSize:16,
    color:'white'
  },
  weatherIcon: {
    justifyContent:'center',
    alignItems:'center',
    height:120,
    width:130,
    position:'absolute',
    top:0,
    left:0,
  },
  Condition_Text:{
    flex: 1,
    alignSelf: 'center',
    position:'absolute',
    marginTop:20,
    bottom:0,
    fontSize:16,
    color:'white',
    fontWeight:'bold'
}
});

export default WeatherCard;