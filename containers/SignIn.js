import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';

import Selector from '../components/Selector';
import {login, signUp} from '../fetch/Fetcher';

const SignIn = () => {
  // Create state to hold user input
  const [form, setForm] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  //Controls the render for form
  const renderForm = () => {
    if (form === true) {
      return (
        <View>
          <View style={localStyles.textBox}>
            <Text>Email: </Text>
            <TextInput
              style={localStyles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text>Password: </Text>
            <TextInput
              style={localStyles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={localStyles.textBox}>
            <Text>Email: </Text>
            <TextInput
              style={localStyles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={localStyles.textBox}>
            <Text>Password: </Text>
            <TextInput
              style={localStyles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={localStyles.textBox}>
            <Text>Confirm Password: </Text>
            <TextInput
              style={localStyles.input}
              secureTextEntry={true}
              value={cPassword}
              onChangeText={setCPassword}
            />
          </View>
        </View>
      );
    }
  };

  //Submits form data to backend
  const handleSubmit = () => {
    if (form === true) {
      fetch(login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        })
        .catch((err) => console.log(err));
    } else {
      fetch(signUp, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <View style={localStyles.back}>
      <View style={localStyles.body}>
        {renderForm()}
        <Selector form={form} setForm={setForm} />
        <View>
          <Button title="Submit" color="#182deb" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  back: {
    backgroundColor: '#6C18EB',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  input: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
  },
  textBox: {
    width: 200,
    alignItems: 'stretch',
    textAlign: 'center',
    paddingBottom: 10,
    padding: 5,
  },
});

export default SignIn;
