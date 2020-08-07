import React, {useEffect, useState} from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';
import Styles from '../Styles';

import UserImage from './UserImage';

const UserHeader = (props) => {
  return (
    <View>
      <ImageBackground style={Styles.headerImg} source={{uri: props.header}}>
        <UserImage img={props.portImg} />
      </ImageBackground>
    </View>
  );
};

export default UserHeader;
