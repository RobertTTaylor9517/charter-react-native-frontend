import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../Styles';
import NativeLinking from 'react-native/Libraries/Linking/NativeLinking';

const Link = ({link}) => {
  const loadInBrowser = () => {
    NativeLinking.openURL(link.link).catch((err) =>
      console.error('Could not load page.'),
    );
  };
  return (
    <TouchableOpacity style={Styles.linkView} onPress={loadInBrowser}>
      <View>
        {console.log(link)}
        <Text>{link.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;
