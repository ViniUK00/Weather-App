import { View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';


const SplashScreen = ({ navigation }: any) => {
  const animationRef = useRef<Lottie>(null)

  useEffect(() => {
    setTimeout(() => navigation.navigate('Main'), 2500) // Show the splash screen for 3 seconds
    animationRef.current?.play()
  }, [navigation]);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Lottie ref={animationRef}  source={require('../../assets/76622-weather.json')}/>
    </View>
  );
};

export default SplashScreen;