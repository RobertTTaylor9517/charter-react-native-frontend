import React, {useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {createPage} from '../fetch/Fetcher';
import Icon from 'react-native-vector-icons/AntDesign';

const NewPage = () => {
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    global.MMKV.getMapAsync('user')
      .then((res) => res)
      .then((userInfo) => {
        console.log(userInfo.token);

        fetch(createPage, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: userInfo.token,
          },
          body: JSON.stringify({
            user_id: userInfo.user_id,
            title: data.name,
            about: data.about,
          }),
        })
          .then((res) => res.json())
          .then(async (result) => {
            console.log(result);
          })
          .catch((err) => console.log(err));
      });
  };
  return (
    <View>
      <View>
        <Text>Name</Text>
        <Controller
          name="name"
          control={control}
          render={(props) => (
            <TextInput
              {...props}
              value={props.value}
              onChangeText={(value) => {
                props.onChange(value);
              }}
            />
          )}
        />
      </View>
      <View>
        <Text>About</Text>
        <Controller
          name="about"
          control={control}
          render={(props) => (
            <TextInput
              {...props}
              placeholder="Tell people about you"
              multiline={true}
              value={props.value}
              onChangeText={(value) => {
                props.onChange(value);
              }}
            />
          )}
        />
      </View>
      <View>
        <Icon name="right" size={30} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({});
export default NewPage;
