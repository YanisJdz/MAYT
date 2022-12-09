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

export default CategoryListScreen = props => {
  const {navigation} = props;

  const categories = [
    'all',
    '2d',
    '3d',
    'action',
    'action-rpg',
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
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={categoryList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => goToGameList(item)} key={index}>
              <View style={styles.card}>
                <Text style={{textTransform: 'capitalize'}}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#282828",
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,

    height: 100,
    borderRadius: 15,
    backgroundColor: '#dfe4ea',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
  },
});
