import React from 'react';
import {Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SingleBlog = ({navigation, route}: any) => {
  const {pdate, title, img, content} = route.params;
  console.log(img);

  return (
    <SafeAreaView>
      <Image
        source={{
          uri:
            img ??
            'https://blog.logrocket.com/wp-content/uploads/2023/06/localizing-content-remix-contentful.png',
        }}
        style={{width: '100%', height: 200}}
      />
      <Text>{pdate}</Text>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </SafeAreaView>
  );
};

export default SingleBlog;
