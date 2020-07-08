import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {create} from 'react-native/jest/renderer';

const User = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>User Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default User;
