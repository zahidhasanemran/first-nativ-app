import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {FlatList, Text} from 'react-native';
import EmptyPosts from './EmptyPosts';
import EndPosts from './EndPosts';
import Item from './Item';
import StartPosts from './StartPosts';
import usePost from './usePost';

type RootStackParamList = {
  Singlepost: {
    title: string;
    img: string;
    content: string;
    pdate: string;
  };
};

type SinglepostScreenRouteProp = RouteProp<RootStackParamList, 'Singlepost'>;

type SinglepostScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Singlepost'
>;

type SinglepostScreenProps = {
  route: SinglepostScreenRouteProp;
  navigation: SinglepostScreenNavigationProp;
};

const Posts = ({navigation}: SinglepostScreenProps) => {
  const {data, error, isLoading, refreshOnPull, users, page, setPage} =
    usePost();
  const list = useRef<FlatList | null>(null);

  const press = () => {
    list?.current?.scrollToEnd({animated: true});
  };

  if (isLoading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>{error?.message}</Text>;
  }
  if (!data) {
    return null;
  }

  return (
    <FlatList
      ref={list}
      ListHeaderComponent={StartPosts({press})}
      ListFooterComponent={EndPosts}
      ListEmptyComponent={EmptyPosts}
      data={users}
      keyExtractor={item => item?.id.toString()}
      // keyExtractor={item => item?.login?.md5}
      renderItem={({item, index}) => (
        <Item navigation={navigation} value={item} i={index} />
      )}
      onRefresh={refreshOnPull}
      refreshing={false}
      onEndReached={() => setPage(page + 1)}
      onEndReachedThreshold={0.1}
    />
  );
};

export default Posts;
/**

The Posts component is a React Native component that displays a list of posts.
It uses the usePost hook to fetch and manage the post data.
The component also includes navigation functionality to navigate to a single post screen.
@param {Object} navigation - The navigation prop provided by React Navigation.
@returns {JSX.Element} A React Native FlatList component displaying the list of posts.
*/
