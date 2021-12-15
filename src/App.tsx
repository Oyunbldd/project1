import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import Welcome from './screens/welcome/welcome';
import Welcome1 from './screens/welcome/welcome1';
import Welcome2 from './screens/welcome/welcome2';
import Home from './screens/home/home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
const httpLink = createHttpLink({
  fetch,
  uri: 'https://graphql.contentful.com/content/v1/spaces/y0vql4lgwa04',
  headers: {
    Authorization: 'Bearer q9eJqpPqdgKU4wfjztDngADtDij5aFcMiY41xo-YX3c',
  },
});
const client = new ApolloClient({link: httpLink, cache: new InMemoryCache()});
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Welcome1"
                component={Welcome1}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Welcome2"
                component={Welcome2}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
