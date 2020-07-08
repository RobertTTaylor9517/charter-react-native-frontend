import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Styles from '../Styles';

const Start = ({navigation}) => {
  return (
    <View style={Styles.main}>
      <Text> Home </Text>
      <Button title="Go to User" onPress={() => navigation.navigate('User')} />
    </View>
  );
};

export default Start;
