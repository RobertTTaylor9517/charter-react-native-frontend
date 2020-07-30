import React from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const SignForm = ({form, onSubmit}) => {
  const {control, handleSubmit, errors} = useForm();

  if (form === true) {
    return (
      <View>
        <View>
          <Text style={Styles.label}>Email</Text>
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
          <Text style={Styles.label}>Password</Text>
          <Controller
            name="password"
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
        <View style={Styles.buttonContainer}>
          <Button
            style={Styles.button}
            title="Submit"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View>
          <Text style={Styles.label}>Email</Text>
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
          <Text style={Styles.label}>Password</Text>
          <Controller
            name="password"
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
          <Text style={Styles.label}>Confirm Password</Text>
          <Controller
            name="cPassword"
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
        <View style={Styles.buttonContainer}>
          <Button
            style={Styles.button}
            title="Submit"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    );
  }
};

const Styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    borderRadius: 4,
  },
  buttonContainer: {
    paddingTop: 10,
  },
});

export default SignForm;
