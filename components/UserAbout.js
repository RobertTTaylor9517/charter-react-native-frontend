import React from 'react';
import {Text, View} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import Styles from '../Styles';

const UserAbout = (props) => {
  const renderViewMore = (onPress) => {
    return (
      <Text style={{left: 10}} onPress={onPress}>
        View more...
      </Text>
    );
  };

  const renderViewLess = (onPress) => {
    return (
      <Text style={{left: 10}} onPress={onPress}>
        View less
      </Text>
    );
  };

  return (
    <View>
      <Text style={Styles.aboutText}>About</Text>
      <ViewMoreText
        numberOfLines={1}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
        textStyle={Styles.aboutContent}>
        <Text>{props.about}</Text>
      </ViewMoreText>
    </View>
  );
};
export default UserAbout;
