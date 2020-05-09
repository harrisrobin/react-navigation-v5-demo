import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {WelcomeScreen} from '../screens/welcome-screen';
import {GoodbyeScreen} from '../screens/goodbye-screen';

const Stack = createNativeStackNavigator();

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="goodbye" component={GoodbyeScreen} />
    </Stack.Navigator>
  );
}
