import React from 'react';
import {Image, View} from 'react-native';

import Styles from '../Styles';
const UserImage = (props) => {
  return (
    <View style={Styles.userView}>
      <Image style={Styles.userImg} source={{uri: props.img}} />
    </View>
  );
};

export default UserImage;
