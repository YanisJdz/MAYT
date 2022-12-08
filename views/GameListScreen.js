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
          return (
            <View key={index} style={styles.card}>
              <View style={styles.cardImage}>
                <Image
                  source={{
                    uri: item.thumbnail,
                  }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardInfos}>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                  <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{item.genre}</Text>
                </View>
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                  <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{item.genre}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    flex: 1,
    flexDirection: 'row',

    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,

    height: 100,
    borderRadius: 15,
    backgroundColor: '#dfe4ea',
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 70,
    borderRadius: 10,
  },
  cardInfos: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle:{
    width: 150,
    overflow:'hidden',
  }
});
