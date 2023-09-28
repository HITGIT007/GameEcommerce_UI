import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler'
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';


const App = () => {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;
