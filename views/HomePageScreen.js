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

export default HomePageScreen = ({}) => {
  return (
    <SafeAreaView>
      <GameFlatList category={'new'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});
