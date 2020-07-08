/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Styles from './Styles';

import Start from './containers/Start';
import User from './containers/User';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer style={Styles.main}>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{title: 'Bizzi'}}
        />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
