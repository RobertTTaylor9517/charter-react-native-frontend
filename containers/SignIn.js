import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';

import Selector from '../components/Selector';
import {login, signUp} from '../fetch/Fetcher';

import SignForm from '../components/SignForm';

const SignIn = () => {
  // Create state to hold user input
  const [form, setForm] = useState(true);

  //Submits form data to backend
  const onSubmit = (data) => {
    if (form === true) {
      fetch(login, {
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
          await global.MMKV.setMapAsync('user', result);
          let user = await global.MMKV.getMapAsync('user');
          console.log(user);
        })
        .catch((err) => console.log(err));
    } else {
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
    }
  };

  return (
    <View style={localStyles.back}>
      <View>
        <SignForm form={form} onSubmit={onSubmit} />

        <Selector form={form} setForm={setForm} />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  back: {
    backgroundColor: '#6C18EB',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});

export default SignIn;
