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
  Linking,
} from 'react-native';

export default GameDetailsScreen = ({route, navigation}) => {
  const {item} = route.params;

  const [detailedGame, setDetailedGame] = useState({});

  useEffect(() =>{
    getGameDetails();
    console.log(detailedGame);
  },[])

  const getGameDetails = async () => {
    try {
      await axios
        .get(`https://www.freetogame.com/api/game?id=${item.id}`)
        .then(response => {
          setDetailedGame(...response.data);
          console.log(detailedGame);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{detailedGame.title}</Text>

      <Image
        source={{
          uri: detailedGame.thumbnail,
        }}
        style={styles.image}
      />

      <Text style={styles.descriptionText}>{detailedGame.description}</Text>
      <View>
        <Text style={styles.categoriesText}>{'Categorie:'}</Text>
        <Text style={styles.normalText}>{detailedGame.genre}</Text>
      </View>
      <View>
        <Text style={styles.categoriesText}>{'Platforme:'}</Text>
        <Text style={styles.normalText}>{detailedGame.platform}</Text>
      </View>
      <View>
        <Text style={styles.categoriesText}>{'Éditeur:'}</Text>
        <Text style={styles.normalText}>{detailedGame.publisher}</Text>
      </View>
      <View>
        <Text style={styles.categoriesText}>{'Date de sortie:'}</Text>
        <Text style={styles.normalText}>{detailedGame.release_date}</Text>
      </View>
      <View>
        <Text style={styles.categoriesText}>{'Configuration système minimale requise:'}</Text>
        <Text style={styles.normalText}>Os: {detailedGame.minimum_system_requirements}</Text>
        {/* <Text style={styles.normalText}>Processeur: {detailedGame.minimum_system_requirements[1]}</Text>
        <Text style={styles.normalText}>Mémoire: {detailedGame.minimum_system_requirements[2]}</Text>
        <Text style={styles.normalText}>Graphique: {detailedGame.minimum_system_requirements[3]}</Text>
        <Text style={styles.normalText}>Espace de stockage: {detailedGame.minimum_system_requirements[4]}</Text> */}
      </View>

      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: '#4376e1',
          height: 40,
          width: 300,
          borderRadius: 25,
          marginTop: 20,
          alignItems: 'center',
        }}
        onPress={() => Linking.openURL(detailedGame.game_url)}>
        <Text style={styles.gameLink}>{detailedGame.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    marginBottom: 40,
  },
  image: {
    marginBottom: 20,
    width: Dimensions.get('window').width,
    height: 200,
    borderRadius: 10,
  },
  categoriesText: {
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: -20,
  },
  normalText: {
    color: 'white',
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
  },
  descriptionText: {
    color: 'white',
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 20,
    fontSize: 16,
  },
  gameLink: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
