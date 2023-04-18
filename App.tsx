import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChartScreen from './src/screens/ChartScreen';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
      <View style={{backgroundColor:'#F5F5F5', flex:1}}>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name='ChartScreen'
          component={ChartScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      </View>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   App:{
//     flex: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding:8,
//     backgroundColor: '#f1f2fc',
//   }})
