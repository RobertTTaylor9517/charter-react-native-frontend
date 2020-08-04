import React, {useEffect, useState} from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';
import Styles from '../Styles';

import UserImage from './UserImage';

const UserHeader = (props) => {
  const defHeader =
    'http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png';
  if (props.header === '') {
    return (
      <View>
        <ImageBackground style={Styles.headerImg} source={{uri: defHeader}}>
          <UserImage img={'https://randomuser.me/api/portraits/men/1.jpg'} />
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View>
        <ImageBackground style={Styles.headerImg} source={{uri: props.header}}>
          <UserImage img={props.portImg} />
        </ImageBackground>
      </View>
    );
  }
};

export default UserHeader;
