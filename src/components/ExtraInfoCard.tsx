// WeatherCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExtraInfoCardProps {
  city: string | undefined;
  temperature: number;
  condition: string | undefined;
}

interface ShowLabelDataType {
  label: string | undefined;
  data: string | number | undefined;
}

const ExtraInfoCard: React.FC<ExtraInfoCardProps> = ({ city, temperature, condition }) => {
  return (
      <View style={styles.card}>
        <View style={styles.labe_data_container}>
        <Text style={styles.label_text}>Wind</Text>
        <Text style={styles.data_text}>{condition} m/h</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    
  },
  labe_data_container:{
    padding:4,
    alignItems:'center',
  },
  label_text:{
    fontSize:15,
    color: '#333333',
    paddingBottom:7
  },
  data_text:{
    fontSize:17,
    fontWeight:'bold'
  }
});

export default ExtraInfoCard;