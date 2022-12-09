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
import GameListScreen from "./GameListScreen";

export default CategoryListScreen = props => {
  const {navigation} = props;

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
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');

  useEffect(() => {
    setCategoryList([...categoryList, ...categories]);
    setCategory('')
  }, []);

  const goToGameList = async (param) => {
    setCategory(param)
    navigation.navigate('GameList', { category: param, title: param })
  }


  return (
    <SafeAreaView>
      <FlatList
        data={categoryList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => goToGameList(item)}
              key={index}>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
