import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import GameFlatList from '../components/GameFlatList';

export default HomeScreen = ({}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <GameFlatList category={'new'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#282828',
  },
});
