import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

type PressType = {
  press: () => void;
};

const StartPosts = ({press}: PressType) => {
  return (
    <>
      <View>
        <Text style={styles.text}> List start</Text>
        <Button onPress={press} title="Go to end" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
  },
});

export default StartPosts;

/**
The StartPosts component is a React Native component that displays a list start and a button.
It receives a prop called press, which is a function that is called when the button is pressed.
@param {Object} props - The component props.
@param {Function} props.press - The function to be called when the button is pressed.
@returns {JSX.Element} A React Native view with a text and a button.
*/
