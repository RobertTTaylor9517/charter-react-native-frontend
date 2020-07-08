import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Styles from '../Styles';

import Link from './Link';

const UserLinks = (props) => {
  return (
    <View>
      {/*{console.log(props.links)}*/}
      <Text style={Styles.aboutText}> Links </Text>
      <FlatList
        data={props.links}
        renderItem={({item}) => <Link link={item} />}
      />
    </View>
  );
};

export default UserLinks;
