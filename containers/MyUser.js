import React, {useEffect, useState} from 'react';
import {createPage} from '../fetch/Fetcher';
import Styles from '../Styles';
import UserHeader from '../components/UserHeader';
import UserAbout from '../components/UserAbout';
import UserLinks from '../components/UserLinks';
import {View} from 'react-native';

const MyUser = () => {
  const [user, setUser] = useState({});
  const [links, setLinks] = useState({});

  useEffect(() => {
    let page_id;
    global.MMKV.getStringAsync('page_id').then((res) => {
      page_id = res;
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
    });
  }, []);

  return (
    <View style={Styles.main}>
      <UserHeader header={user.headerImg} portImg={user.userImg} />
      <UserAbout about={user.about} />
      <UserLinks style={{flex: 2}} links={links} />
    </View>
  );
};

export default MyUser;
