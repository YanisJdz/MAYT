import React, {useCallback, useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
  const sessionData = useSelector(state => state.session.sessionData);
  const userBase = useSelector(state => state.user.userBase);
  const dispatch = useDispatch();
  const userData = userBase.find(x => x.name === sessionData.user);
  const [firstNameEmpty, setFirstNameEmpty] = useState(true);
  useEffect(() => {
    setFirstNameEmpty(userData.firstName == '');
  }, [userData.firstName]);
  const [lastNameEmpty, setLastNameEmpty] = useState(true);
  useEffect(() => {
    setLastNameEmpty(userData.lastName == '');
  }, [userData.lastName]);
  const [emailEmpty, setEmailEmpty] = useState(true);
  useEffect(() => {
    setEmailEmpty(userData.email == '');
  }, [userData.email]);
  const [phoneNumbertEmpty, setPhoneNumberEmpty] = useState(true);
  useEffect(() => {
    setPhoneNumberEmpty(userData.phoneNumber == '');
  }, [userData.phoneNumber]);

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
        <Text style={styles.enter_text}>{userData.name}</Text>
        <Text style={styles.enter_text}>
          {lastNameEmpty ? 'Last Name' : userData.lastName}
        </Text>
        <Text style={styles.enter_text}>
          {firstNameEmpty ? 'First Name' : userData.firstName}
        </Text>
        <Text style={styles.enter_text}>Date de naissance</Text>
        <Text style={styles.enter_text}>
          {emailEmpty ? 'Email' : userData.email}
        </Text>
        <Text style={styles.enter_text}>
          {phoneNumbertEmpty ? 'Phone Number' : userData.phoneNumber}
        </Text>
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
    backgroundColor: '#282828',
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
    color: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 30,
  },

  enter_text: {
    borderColor: 'lightsteelblue',
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
