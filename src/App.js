/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const {Screen, Navigator} = createStackNavigator();
import GroundList from './screens/GroundList';
import Ground from "./screens/Ground";

const screenOptions= {
  headerShown: false
}

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="GroundList" screenOptions={screenOptions} initialRouteName="Home">
        <Screen name="GroundList" component={GroundList}/>
        <Screen name="Ground" component={Ground}/>
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
