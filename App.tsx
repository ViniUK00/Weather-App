import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{backgroundColor:'#F5F5F5', flex:1}}>
      <StatusBar style="auto" />
      <HomeScreen />
      </View>
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
