import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Item = ({value, navigation}: any) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri:
            value?.urlToImage ??
            value?.cover_image ??
            'https://blog.logrocket.com/wp-content/uploads/2023/06/localizing-content-remix-contentful.png',
        }}
        style={styles.img}
      />
      <Text
        style={styles.itemText}
        onPress={() =>
          navigation.navigate('Singlepost', {
            title: value?.title,
            img: value?.urlToImage ?? value?.cover_image,
            content: value?.content ?? value?.description,
            pdate: value?.publishedAt ?? value?.published_at,
          })
        }>
        {value?.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 120,
    borderRadius: 4,
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
  },
  text: {
    color: 'green',
  },
  text2: {
    color: 'red',
  },
});

export default Item;
