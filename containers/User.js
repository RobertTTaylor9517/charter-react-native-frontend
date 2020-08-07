import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import Styles from '../Styles';

import UserHeader from '../components/UserHeader';
import UserAbout from '../components/UserAbout';
import UserLinks from '../components/UserLinks';
import {createPage} from '../fetch/Fetcher';

const User = ({navigation, route}) => {
  useEffect(() => {
    let page_id = route.params.id;

    //Fetches user profile
    fetch(`${createPage}${page_id}/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      })
      .catch((err) => console.log(err));

    //Fetches Users Links
    fetch(`${createPage}${page_id}/links/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setLinks(result);
      })
      .catch((err) => console.log(err));
  }, [route.params.id]);

  // Generating Dummy user data
  const [user, setUser] = useState({
    id: uuidv4(),
    name: 'John Smith',
    about:
      'Software Engineer \nMusic Producer \nApp Creator \nFreelance App Creator for hire',
    headerImg:
      'http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
  });

  navigation.setOptions({title: user.name});

  // Generating Dummy Links for State Test
  const [links, setLinks] = useState([
    {
      id: uuidv4(),
      name: 'Link 1',
      link: 'https://www.instagram.com/',
    },
    {
      id: uuidv4(),
      link: 'https://www.youtube.com/',
      name: 'Link 2',
    },
  ]);
  return (
    <View style={Styles.main}>
      <UserHeader header={user.headerImg} portImg={user.userImg} />
      <UserAbout about={user.about} />
      <UserLinks style={{flex: 2}} links={links} />
    </View>
  );
};

export default User;
