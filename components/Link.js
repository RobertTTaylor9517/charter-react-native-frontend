import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../Styles';

const Link = ({link}) => {
  return (
    <TouchableOpacity style={Styles.linkView}>
      <View>
        {console.log(link)}
        <Text>{link.link}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;
