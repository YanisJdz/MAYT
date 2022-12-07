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

export default GameListScreen = ({}) => {
  const [lastGames, setLastGames] = useState([]);

  useEffect(() => {
    getLastGames();
  }, []);

  const getLastGames = async () => {
    try {
      await axios
        .get('https://www.freetogame.com/api/games?sort-by=release-date')
        .then(response => {
            setLastGames([...lastGames, ...response.data.slice(0, 20)]);          
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={lastGames}
        renderItem={({item, index}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
