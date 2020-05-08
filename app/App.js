/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {enableScreens} from 'react-native-screens';
import {RootNavigator} from './navigation';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
enableScreens();

const App = () => {
  return (
    <>
      <RootNavigator />
    </>
  );
};

export default App;
