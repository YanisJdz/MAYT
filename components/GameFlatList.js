import React, {useCallback, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
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
import GameCard from '../components/GameCard';

export default GameFlatList = ({category}) => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    getGamesData();
  }, []);

  const getGamesData = async () => {
    if (category != null || category !== '') {
      getGamesByCategory();
    }
  };

  const getGamesByCategory = async () => {
    if (category === 'new') {
      try {
        await axios
          .get('https://www.freetogame.com/api/games?sort-by=release-date')
          .then(response => {
            setGamesData([...gamesData, ...response.data.slice(0, 20)]);
          });
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await axios
          .get(`https://www.freetogame.com/api/games?category=${category}`)
          .then(response => {
            setGamesData([...gamesData, ...response.data.slice(0, 20)]);
          });
      } catch (error) {}
    }
  };

  return (
    <FlatList
      data={gamesData}
      renderItem={({item, index}) => {
        return <GameCard item={item} index={index} />;
      }}
    />
  );
};

const styles = StyleSheet.create({});
