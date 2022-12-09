import React, {useCallback} from 'react';
import {useEffect, useMemo, useState} from 'react';
import DatePicker from 'react-native-date-picker';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import moment from 'moment';

const App = () => {
  const [firstname, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [uri, setUri] = useState();

  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const goToProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  const takeProfilePicture = useCallback(async () => {
    const result = await launchImageLibrary();
    setUri(result.assets[0].uri);

    console.log(result);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.column_inscription}>
        <Text style={styles.bold}>MY PROFILE</Text>
      </View>
      <View style={styles.column_inscription}>
        <TouchableOpacity style={styles.round} onPress={takeProfilePicture}>
          {uri ? (
            <Image style={styles.round} source={{uri}} />
          ) : (
            <Text
              style={{
                fontSize: 20,
                alignContent: 'center',
                textAlign: 'center',
                marginTop: 50,
              }}>
              Modifier ma photo
            </Text>
          )}
        </TouchableOpacity>
        <TextInput
          value={firstname}
          onChangeText={setFirstName}
          style={styles.enter_text}
          placeholder={'First name'}
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          style={styles.enter_text}
          placeholder={'Nom'}
        />
        <>
          <TouchableOpacity
            style={styles.enter_text}
            onPress={() => setOpen(true)}>
            <Text
              style={{
                fontSize: 20,
                alignContent: 'center',
                textAlign: 'center',
                color: 'darkgrey',
              }}>
              {!date ? 'Birthdate' : moment(date).format('LL')}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date || new Date()}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              console.log(date);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.enter_text}
          placeholder={'Email'}
        />
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.enter_text}
          placeholder={'Phone Number'}
        />
        <TouchableOpacity style={styles.bouton} onPress={goToProfile}>
          <Text
            style={{
              alignItems: 'center',
              alignContent: 'center',
              textAlign: 'center',
            }}>
            Save
          </Text>
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
    backgroundColor: 'lightgray',
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
