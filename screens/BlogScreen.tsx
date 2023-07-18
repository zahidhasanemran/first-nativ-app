import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Posts from './Posts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Singlepost: {
    title: string;
    img: string;
    content: string;
    pdate: string;
  };
};

// define a type for the navigation prop:
type BlogScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: BlogScreenNavigationProp;
};
const BlogScreen = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
        networkActivityIndicatorVisible={true}
      />
      <Posts navigation={navigation} />
    </SafeAreaView>
  );
};

export default BlogScreen;
