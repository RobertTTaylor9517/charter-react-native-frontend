import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyUser from './MyUser';

const MyUserNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="MyUser">
      <Drawer.Screen name="MyUser" component={MyUser} />
    </Drawer.Navigator>
  );
};

export default MyUserNavigator;
