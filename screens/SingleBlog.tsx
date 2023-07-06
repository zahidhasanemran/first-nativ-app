import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SingleBlog = ({navigation, route}: any) => {
  const {userId, email} = route.params;
  return (
    <SafeAreaView>
      <Text>{userId}</Text>
      <Text>{email}</Text>
    </SafeAreaView>
  );
};

export default SingleBlog;
