import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import ChartScreen from '../src/screens/ChartScreen';
import SplashScreen from '../src/screens/SplashScreen';

export type RootStackParamList = {
    Main: undefined;
    ChartScreen: undefined;
    SplashScreen:undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="SplashScreen" >
        <RootStack.Group>
        <RootStack.Screen 
          name='SplashScreen'
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen 
          name='Main'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen 
          name='ChartScreen'
          component={ChartScreen}
          options={{
            headerShown: true,
          }}
        />
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator