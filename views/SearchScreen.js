import React, { useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import axios from "axios";
import GameCard from "../components/GameCard";


export default SearchScreen = () => {
  const [gamesData, setGamesData] = useState([]);
  const [search, setSearch] = useState([]);


  useEffect(() => {
    getGamesByName();
  }, []);

  const filteredGamesData = useMemo(() => {
    return gamesData.filter(item => item.title.includes(search))
  }, [gamesData, search])


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
    }


  return (
    <SafeAreaView style={styles.screen}>
      <FlatList style={styles.list}
        data={filteredGamesData}
        renderItem={({item, index}) => {
          return <GameCard item={item} index={index} />;
        }}
      />
      <TextInput style={styles.searchBar}
      placeholder={"Recherche"}
      value={search}
      onChangeText={setSearch}/>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#282828",
  },
  list : {
    flex: 9,
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    marginLeft: 20,
    width: "90%",
    marginBottom: 7.5,
    backgroundColor: "#6198ec",
    borderRadius: 30,
  }

});

