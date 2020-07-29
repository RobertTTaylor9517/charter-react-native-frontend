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
import SplashScreen from 'react-native-splash-screen';

import Styles from './Styles';

import Start from './containers/Start';
import User from './containers/User';
import NewPage from './containers/NewPage';
import SignIn from './containers/SignIn';
import MMKVStorage from 'react-native-mmkv-storage/index';
import {initDb} from './storage/IMDatabase';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['https://charta.com', 'charta://'],
  config: {
    screens: {
      User: 'User',
    },
  },
};

class App extends React.Component {
  componentDidMount(): * {
    initDb();
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render(): React$Node {
    return (
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="User"
            component={User}
            options={{
              headerTitleStyle: {
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="NewUser"
            component={NewPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
