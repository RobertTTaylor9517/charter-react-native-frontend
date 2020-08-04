import React, {useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {baseURL, createPage} from '../fetch/Fetcher';
import Icon from 'react-native-vector-icons/AntDesign';

const NewPage = ({navigation}) => {
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    global.MMKV.getMapAsync('user').then((userInfo) => {
      const user = userInfo;
      fetch(createPage, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: user.token,
        },
        body: JSON.stringify({
          user_id: user.user_id,
          title: data.name,
          about: data.about,
          headerImg: '',
          userImg: '',
        }),
      })
        .then((res) => res.json())
        .then(async (result) => {
          await global.MMKV.setStringAsync('page_id', result);
          navigation.navigate('UserNav');
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
