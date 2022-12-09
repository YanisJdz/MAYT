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
  Linking,
} from 'react-native';

export default GameDetailsScreen = ({route, navigation}) => {
  const {item, title} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{item.title}</Text>

      <Image
        source={{
          uri: item.thumbnail,
        }}
        style={styles.image}
      />

      <Text style={styles.descriptionText}>{item.short_description}</Text>
      <View>
        <Text style={styles.categoriesText}>{'Categories:'}</Text>
        <Text style={styles.normalText}>{item.genre}</Text>
      </View>
      <View>
        <Text style={styles.categoriesText}>{'Platform:'}</Text>
        <Text style={styles.normalText}>{item.platform}</Text>
      </View>
      <View>
        <Text style={styles.categoriesText}>{'Publisher:'}</Text>
        <Text style={styles.normalText}>{item.publisher}</Text>
      </View>
      <View>
        <Text style={styles.categoriesText}>{'Release Date:'}</Text>
        <Text style={styles.normalText}>{item.release_date}</Text>
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
        onPress={() => Linking.openURL(item.game_url)}>
        <Text style={styles.gameLink}>{item.title}</Text>
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
