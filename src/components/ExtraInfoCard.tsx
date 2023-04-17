// WeatherCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExtraInfoCardProps {
  city: string | undefined;
  temperature: number;
  condition: string | undefined;
}

const ExtraInfoCard: React.FC<ExtraInfoCardProps> = ({ city, temperature, condition }) => {
  return (
      <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <View style={styles.weatherInfo}>
        <Text style={styles.temperature}>{`${(temperature - 273.15).toFixed(2)}°`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
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
    color:'black'
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
    color:'black'
  },
  condition: {
    fontSize: 20,
    marginTop: 10,
    color: '#ffffff',
  },
});

export default ExtraInfoCard;