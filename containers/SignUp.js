import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {signUp} from '../fetch/Fetcher';

import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  const onSubmit = (data) => {
    fetch(signUp, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then(async (result) => {
        console.log(result);
        await global.MMKV.setMapAsync('user', result);
        let user = await global.MMKV.getMapAsync('user');
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={Styles.back}>
      <View style={Styles.innerView}>
        <SignUpForm onSubmit={onSubmit} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  back: {
    backgroundColor: '#6C18EB',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  innerView: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default SignUp;
