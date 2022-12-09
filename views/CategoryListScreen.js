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
import GameListScreen from './GameListScreen';

export default CategoryListScreen = props => {
  const {navigation} = props;

  const categories = [
    'all',
    '2d',
    '3d',
    'action',
    'action-rpg',
    'all',
    'anime',
    'battle-royale',
    'card',
    'fantasy',
    'fighting',
    'first-person',
    'flight',
    'horror',
    'low-spec',
    'martial-arts',
    'military',
    'mmo',
    'mmofps',
    'mmorpg',
    'mmorts',
    'mmotps',
    'moba',
    'open-world',
    'permadeath',
    'pixel',
    'pve',
    'pvp',
    'racing',
    'sailing',
    'sandbox',
    'sci-fi',
    'shooter',
    'side-scroller',
    'social',
    'space',
    'sports',
    'strategy',
    'superhero',
    'survival',
    'tank',
    'third-Person',
    'top-down',
    'tower-defense',
    'turn-based',
    'voxel',
    'zombie',
  ];
  const [categoryList, setCategoryList] = useState([]);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');

  useEffect(() => {
    setCategoryList([...categoryList, ...categories]);
    setCategory('');
  }, []);

  const goToGameList = async param => {
    setCategory(param);
    navigation.navigate('GameList', {category: param, title: param});
  };

  return (
    <SafeAreaView>
      <FlatList
        data={categoryList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => goToGameList(item)} key={index}>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
