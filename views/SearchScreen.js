import React, {useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';
import GameCard from '../components/GameCard';

export default SearchScreen = () => {
  const [gamesData, setGamesData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getGamesByName();
  }, []);

  const filteredGamesData = useMemo(() => {
    return gamesData.filter(item => item.title.includes(search));
  }, [gamesData, search]);

  const getGamesByName = async () => {
    try {
      await axios
        .get('https://www.freetogame.com/api/games?sort-by=alphabetical')
        .then(response => {
          setGamesData([...gamesData, ...response.data]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={styles.list}
        data={filteredGamesData}
        renderItem={({item, index}) => {
          return <GameCard item={item} index={index} />;
        }}
      />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder={'Recherche'}
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#282828',
  },
  list: {
    flex: 9,
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  searchInput: {
    paddingHorizontal: 15,
    height: 40,
    marginLeft: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
});
