import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import Styles from '../Styles';

import UserHeader from '../components/UserHeader';
import UserAbout from '../components/UserAbout';
import UserLinks from '../components/UserLinks';

const User = ({navigation}) => {
  // Generating Dummy user data
  const [user, setUser] = useState([
    {
      id: uuidv4(),
      name: 'John Smith',
      about:
        'Software Engineer \nMusic Producer \nApp Creator \nFreelance App Creator for hire',
      headerImg:
        'http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png',
      userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  ]);

  navigation.setOptions({title: user[0].name});

  // Generating Dummy Links for State Test
  const [links, setLinks] = useState([
    {
      id: uuidv4(),
      name: 'Link 1',
      link: 'https://www.instagram.com/',
    },
    {
      id: uuidv4(),
      link:
        'https://www.youtube.com/',
      name: 'Link 2',
    },
  ]);
  return (
    <View style={Styles.main}>
      <UserHeader header={user[0].headerImg} portImg={user[0].userImg} />
      <UserAbout about={user[0].about} />
      <UserLinks style={{flex: 2}} links={links} />
    </View>
  );
};

export default User;
