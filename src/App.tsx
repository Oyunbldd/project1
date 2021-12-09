import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import Welcome from './screens/welcome/welcome';
import Welcome1 from './screens/welcome/welcome';
import Welcome2 from './screens/welcome/welcome1';
import Home from './screens/home/home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
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
  );
}
