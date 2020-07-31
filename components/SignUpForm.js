import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {useForm, Controller} from 'react-hook-form';

const SignUpForm = ({onSubmit}) => {
  const {control, handleSubmit, errors} = useForm();
  const [cPassword, setCPassword] = useState();

  return (
    <View style={Styles.outerView}>
      <View>
        <Text style={Styles.label}>Email: </Text>
        <Controller
          name="email"
          control={control}
          render={(props) => (
            <TextInput
              {...props}
              style={Styles.input}
              onChangeText={(value) => {
                props.onChange(value);
              }}
              value={props.value}
            />
          )}
        />
      </View>
      <View>
        <Text style={Styles.label}>Password: </Text>
        <Controller
          name="password"
          control={control}
          render={(props) => (
            <TextInput
              {...props}
              style={Styles.input}
              secureTextEntry={true}
              onChangeText={(value) => {
                props.onChange(value);
              }}
            />
          )}
        />
      </View>
      <View>
        <Text style={Styles.label}>Confirm Password: </Text>
        <TextInput
          value={cPassword}
          onChangeText={setCPassword}
          style={Styles.input}
          secureTextEntry={true}
        />
      </View>
      <View style={Styles.buttonContainer}>
        <Icon name="right" size={30} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  label: {
    margin: 20,
    marginLeft: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonContainer: {
    paddingTop: 20,
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  outerView: {
    backgroundColor: 'white',
    flex: 1,
    borderColor: '#460F99',
    borderWidth: 1,
    justifyContent: 'center',
  },
});

export default SignUpForm;
