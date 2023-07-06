import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';

import {AppStateStatus, Platform} from 'react-native';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppState} from './hooks/useAppState';
import Posts from './screens/Posts';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <NavigationContainer> */}
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
          networkActivityIndicatorVisible={true}
        />
        <Posts />
      </SafeAreaView>
      {/* </NavigationContainer> */}
    </QueryClientProvider>
  );
}

export default App;
