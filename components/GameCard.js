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
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default GameCard = ({ item, index }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
        key={index}
        onPress={()=>{
            navigation.navigate('GameDetail', { item: item, title: item.title })
        }}
    >
      <View style={styles.card}>
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
            <Text
              style={[styles.cardDetail, {width: 150}]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.title}
            </Text>
            <Text
              style={[styles.cardDetail, {width: 100}]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.genre}
            </Text>
          </View>
          <View style={styles.cardDetails}>
            <Text
              style={[styles.cardDetail, {width: 150}]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.platform}
            </Text>
            <Text
              style={[styles.cardDetail, {width: 100}]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.publisher}
            </Text>
          </View>
          <View style={[styles.cardDetails, {justifyContent: 'flex-end'}]}>
            <Text
              style={styles.cardRelease}
              numberOfLines={1}
              ellipsizeMode="tail">
              Date de sortie : {item.release_date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',

    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,

    height: 100,
    borderRadius: 15,
    backgroundColor: 'steelblue',
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
    alignItems: 'center',
    paddingVertical: 5,
  },
  cardDetail: {
    overflow: 'hidden',
    color: 'white',
  },
  cardRelease: {
    alignItems: 'center',
    color: 'white',
    fontSize: 12,
  },
});
