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

export default CategoryListScreen = ({}) => {
  const categories = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
  ];
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList([...categoryList, ...categories]);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={categoryList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity key={index}>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
