import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Start = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="right"
          size={30}
          onPress={() => navigation.navigate('User')}
        />
      ),
    });
  });

  return (
    <View style={styles.main}>
      <Text style={styles.text}> Home </Text>
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

export default Start;
