import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const goToModif = useCallback(() => {
    navigation.navigate('Profile_modif');
  }, [navigation]);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.column_inscription}>
        <Text style={styles.bold}>MY PROFILE</Text>
      </View>
      <View style={styles.column_inscription}>
        <View style={styles.round} />
        <Text style={styles.enter_text}>Nom</Text>
        <Text style={styles.enter_text}>Prénom</Text>
        <Text style={styles.enter_text}>Date de naissance</Text>
        <Text style={styles.enter_text}>Email</Text>
        <Text style={styles.enter_text}>Numéro de téléphone</Text>
        <TouchableOpacity style={styles.bouton} onPress={goToModif}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  column_inscription: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  round: {
    borderColor: 'black',
    backgroundColor: 'steelblue',
    borderWidth: 1,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginBottom: 20,
  },

  bold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },

  enter_text: {
    borderColor: 'black',
    borderRadius: 7,
    width: '70%',
    borderWidth: 1,
    alignContent: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: 'lightgray',
  },

  bouton: {
    borderColor: 'black',
    borderRadius: 7,
    width: '50%',
    marginTop: 40,
    borderWidth: 1,
    backgroundColor: 'lightsteelblue',
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default App;
