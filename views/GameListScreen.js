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

export default GameListScreen = ({route, navigation}) => {
  const {category, title} = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <GameFlatList category={category}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
