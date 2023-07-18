import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const EndPosts = () => {
  return (
    <View>
      <Text style={styles.text}> List ended</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
  },
});

export default EndPosts;
/**

The EndPosts component is a React Native component that displays a message indicating the end of a list.
@returns {JSX.Element} A React Native view with a text indicating the end of the list.
*/
