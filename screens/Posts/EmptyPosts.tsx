import React from 'react';
import {StyleSheet, Text} from 'react-native';

const EmptyPosts = () => {
  return (
    <>
      <Text style={styles.text2}> No data present!</Text>;
    </>
  );
};

const styles = StyleSheet.create({
  text2: {
    color: 'red',
  },
});

export default EmptyPosts;

/**
The EmptyPosts component is a React Native component that displays a message when no data is present.
@returns {JSX.Element} A React Native Text component with a red color indicating no data.
*/
