import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getForecast } from '../api/fetchWeatherData';
import { ForecastRes } from '../types/ForecastApiResponse';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';

interface ForecastCardProps {
  lat: number;
  lng: number;
}

const Forecast: React.FC<ForecastCardProps> = ({ lat, lng }) => {
  const [forecastData, setForecastData] = useState<ForecastRes | undefined>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getForecast(lat, lng);
        setForecastData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [lat, lng]);

  const renderForecast = () => {
    if (!forecastData) return null;

    const daysOfWeek = [
        'Today',
         'Tomorrow',
          ...Array(2).fill(null).map((_, i) => moment(forecastData.list[(i + 2) * 8].dt_txt).format('dddd'))];

    return daysOfWeek.map((day, index) => {
      const forecast = forecastData.list[index * 8];
      const icon = forecast.weather[0].icon;
      const maxTemp = forecast.main.temp_max;
      const minTemp = forecast.main.temp_min;

      return (
        <Text key={day} style={styles.text}>
          {day}
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
            }}
          />
          Range: {`${(minTemp - 273.15).toFixed(0)}°`} - {`${(maxTemp - 273.15).toFixed(0)}°`}
        </Text>
      );
    });
  };

  return (
    <LinearGradient colors={['#3f51b5', '#7986cb']} style={styles.Linearcontainer}>
      <View style={styles.container}>{renderForecast()}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Linearcontainer: {
    borderRadius: 50,
    marginHorizontal: 10,
  },
  container: {
    marginHorizontal: 58,
  },
  text: {
    width:230,
    fontSize: 15,
    textAlign: 'center',
    margin: 8,
    color: 'white',
    fontWeight: '600',
  },
  weatherIcon: {
    height: 50,
    width: 50,
  },
});

export default Forecast;
