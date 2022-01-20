import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar backgroundColor='white' barStyle='dark-content' />
    </>
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
