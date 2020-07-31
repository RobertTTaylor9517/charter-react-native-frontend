import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Selector = (props) => {
  const navigation = useNavigation();

  return (
    <Text style={{paddingBottom: 30}}>
      Don't have an account?{' '}
      <Text
        style={{color: 'blue', textDecorationLine: 'underline'}}
        onPress={() => navigation.navigate('SignUp')}>
        Sign up!
      </Text>
    </Text>
  );
};

export default Selector;
