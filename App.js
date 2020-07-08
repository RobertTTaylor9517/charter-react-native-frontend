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
  const linking = {
    prefixes: ['', ''],
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerTitleStyle: {
              textAlign: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
