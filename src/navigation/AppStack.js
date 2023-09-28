import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Home from '../screens/Home';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>} screenOptions={{headerShown: false}}>
      <Drawer.Screen component={Home} name="Home" />
      <Drawer.Screen component={ProfileScreen} name="Profile" />
      <Drawer.Screen component={MessagesScreen} name="Messages" />
      <Drawer.Screen component={MomentsScreen} name="Moments" />
      <Drawer.Screen component={SettingsScreen} name="Settings" />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
