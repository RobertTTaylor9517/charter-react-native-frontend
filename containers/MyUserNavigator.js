import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyUser from './MyUser';

const MyUserNavigator = ({navigation}) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="MyUser">
      <Drawer.Screen
        name="MyUser"
        component={MyUser}
        options={{
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyUserNavigator;
