import {useQuery} from '@tanstack/react-query';
import React, {useState, useRef} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {fetchPosts} from '../apis';
import {useRefreshByUser} from '../hooks/useRefreshByUser';

const Item = ({value, i}: any) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>
      {' '}
      {i} {value?.email}
    </Text>
  </View>
);

const endComponent = () => {
  return (
    <View>
      <Text style={styles.text}> List ended</Text>
    </View>
  );
};

const handleEmpty = () => {
  return <Text style={styles.text2}> No data present!</Text>;
};

const Posts = () => {
  const list = useRef(null);

  const press = () => {
    //@ts-ignore
    list?.current?.scrollToEnd({animated: true});
  };

  const StartComponent = () => {
    return (
      <View>
        <Text style={styles.text}> List start</Text>
        <Button onPress={press} title="Go to end" />
      </View>
    );
  };

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const {data, error, isLoading, refetch} = useQuery(
    ['users', page],
    () => fetchPosts({page, limit: 10}),
    {
      keepPreviousData: true, // keep the old data until the new data comes
      onSuccess: data => {
        if (data?.results?.length && users.length < 100) {
          // @ts-ignore
          setUsers([...users, ...data?.results]);
        } // append the new data to the old data
        // setPage(data?.page + 1);
      },
    },
  );

  const refreshOnPull = e => {
    e?.preventDefaults();
    setUsers([]);
    setPage(1);
  };

  const {isRefetchingByUser, refetchByUser} = useRefreshByUser(refetch);
  // useRefreshOnFocus(refetch)

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
    // <></>
    <FlatList
      ref={list}
      ListHeaderComponent={StartComponent}
      ListFooterComponent={endComponent}
      ListEmptyComponent={handleEmpty}
      data={users}
      keyExtractor={item => item?.login?.md5}
      renderItem={({item, index}) => <Item value={item} i={index} />}
      onRefresh={refreshOnPull}
      refreshing={false}
      onEndReached={() => setPage(page + 1)}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f9c2ff',
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

export default Posts;
