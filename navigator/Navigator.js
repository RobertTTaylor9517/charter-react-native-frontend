import React from 'react';
import {} from 'react-native';
import {} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import User from '../containers/User';

const MainApp = createStackNavigator({
  User: {
    screen: User,
    path: 'user/:userId',
  },
});
