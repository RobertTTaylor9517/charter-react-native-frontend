import React from 'react';
import {Image, View} from 'react-native';

import Styles from '../Styles';
const UserImage = (props) => {
  const image = {uri: props.img};
  return (
    <View style={Styles.userView}>
      <Image style={Styles.userImg} source={image} />
    </View>
  );
};

export default UserImage;
