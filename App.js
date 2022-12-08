/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Navigation from './components/Navigation';

export default App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <Navigation />;
};

const styles = StyleSheet.create({});
