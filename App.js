import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/screens/MusicScreen';
import AppNavigator from './app/navigation/AppNavigatior';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
