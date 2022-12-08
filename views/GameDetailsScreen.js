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

export default GameDetailsScreen = ({item}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>item.title</Text>
        <Text>item.thumbnail</Text>
        <Text>item.short_description</Text>
        <Text>item.genre</Text>
        <Text>item.platform</Text>
        <Text>item.publisher</Text>
        <Text>item.release_date</Text>
        <TouchableOpacity style={{padding: 10, backgroundColor:'#70a1ff', height: 40, width: 150}}>
            <Text>
                item.game_url
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
