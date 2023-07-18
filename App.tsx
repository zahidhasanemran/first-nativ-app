import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import React from 'react';
import {AppStateStatus, Platform} from 'react-native';
import {useAppState} from './hooks/useAppState';
import BlogScreen from './screens/BlogScreen';
import SingleBlog from './screens/SingleBlog';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 0}},
});

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {props => <BlogScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Singlepost">
            {props => <SingleBlog {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
