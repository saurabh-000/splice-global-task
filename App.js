/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import HomeScreen from './screens/HomeScreen';
import {StatusBar, StyleSheet} from 'react-native';
import {color} from './theme/colors';

const App: () => Node = () => {
  return (
    <>
      <StatusBar backgroundColor={color.primaryAppColor} animated={true} />
      <HomeScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
