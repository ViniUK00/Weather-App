// WeatherCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface WeatherCardProps {
  city: string | undefined;
  temperature: number;
  condition: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, condition }) => {
  return (
      <LinearGradient colors={['#3f51b5', '#7986cb']} style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <View style={styles.weatherInfo}>
        <Text style={styles.temperature}>{`${(temperature - 273.15).toFixed(0)}°`}</Text>
      </View>
      <Text style={styles.condition}>{`Feels like ${(condition - 273.15).toFixed(0)}°`}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  city: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  temperature: {
    fontSize: 48,
    marginLeft: 10,
    color: '#ffffff',
  },
  condition: {
    fontSize: 20,
    marginTop: 10,
    color: '#ffffff',
  },
});

export default WeatherCard;