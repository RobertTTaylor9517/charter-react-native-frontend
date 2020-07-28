import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Selector = (props) => {
  const changeSelect = () => {
    props.setForm(!props.form);
  };

  if (props.form === true) {
    return (
      <Text style={{paddingBottom: 30}}>
        Don't have an account?{' '}
        <Text
          style={{color: 'blue', textDecorationLine: 'underline'}}
          onPress={changeSelect}>
          Sign up!
        </Text>
      </Text>
    );
  } else {
    return (
      <Text style={{paddingBottom: 30}}>
        Already have an account?{' '}
        <Text
          style={{color: 'blue', textDecorationLine: 'underline'}}
          onPress={changeSelect}>
          Sign in!
        </Text>
      </Text>
    );
  }
};

export default Selector;
