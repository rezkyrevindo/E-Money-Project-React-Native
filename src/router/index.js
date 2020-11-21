import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History, Home,  Login, Register, QRPay, Profile, Splash, TopUp, Transfer, TopUpSuccess } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="QRPay" component={QRPay}/>
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
      <Stack.Screen name="Top Up Success" component={TopUpSuccess} options={{headerTitle:"Detail Transaksi"}}/>
      <Stack.Screen name="Riwayat Transaksi" component={History}  />
      <Stack.Screen name="Top Up" component={TopUp}  />
      <Stack.Screen name="Transfer" component={Transfer}  />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
