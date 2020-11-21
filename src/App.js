import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import Router from './router';
import {WARNA_UTAMA, WARNA_SECONDARY} from './utils/constant';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: WARNA_UTAMA,
    text: '#Fff',
    notification: 'rgb(255, 69, 58)',
    background : '#fff'
  },
};

const App = () => {
  return (
      <NavigationContainer theme={MyTheme}>
        <Router />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
