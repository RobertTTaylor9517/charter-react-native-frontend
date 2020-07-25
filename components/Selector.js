import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Selector = (props) => {
  const changeSelect = () => {
    props.setForm(!props.form);
  };

  if (props.form === true) {
    return (
      <Text>
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
      <Text>
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
