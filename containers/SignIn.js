import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';

import Selector from '../components/Selector';

const SignIn = () => {
  const [form, setForm] = useState(true);
  const renderForm = () => {
    if (form === true) {
      return (
        <View>
          <View style={localStyles.textBox}>
            <Text>Email: </Text>
            <TextInput style={localStyles.input} />
          </View>
          <View>
            <Text>Password: </Text>
            <TextInput style={localStyles.input} secureTextEntry={true} />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={localStyles.textBox}>
            <Text>Email: </Text>
            <TextInput style={localStyles.input} />
          </View>
          <View style={localStyles.textBox}>
            <Text>Password: </Text>
            <TextInput style={localStyles.input} secureTextEntry={true} />
          </View>
          <View style={localStyles.textBox}>
            <Text>Confirm Password: </Text>
            <TextInput style={localStyles.input} secureTextEntry={true} />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={localStyles.back}>
      <View style={localStyles.body}>
        {renderForm()}
        <Selector form={form} setForm={setForm} />
        <View>
          <Button title="Submit" color="#182deb" />
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
    padding: 30,
    margin: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
  },
  textBox: {
    width: 200,
    alignItems: 'stretch',
    textAlign: 'center',
    padding: 5,
  },
});

export default SignIn;
