import React, {useCallback, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actions as userActions} from '../redux/reducers/userReducer';

const SignupScreen = props => {
  const {navigation} = props;

  const userBase = useSelector(state => state.user.userBase);
  const dispatch = useDispatch();

  const [pseudoInput, setPseudoInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');
  const [pwdConfirmInput, setPwdConfirmInput] = useState('');

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const validPwd = useMemo(() => {
    return pwdInput.length <= 3 && pwdInput.length > 0;
  }, [pwdInput]);

  const validConfirmPwd = useMemo(() => {
    return pwdInput === pwdConfirmInput;
  }, [pwdConfirmInput, pwdInput]);

  const onRegisterButton = useCallback(() => {
    if (!pseudoInput || !pwdInput) {
      Alert.alert(
        'Erreur',
        "Veuillez entrer un nom d'utilisateur et un mot de passe correct.",
      );
      return;
    }

    if (pwdInput !== pwdConfirmInput) {
      Alert.alert(
        'Erreur',
        'Le mot de passe et la vérification ne correspondent pas.',
      );
      return;
    }

    if (userBase.find(x => x.name === pseudoInput)) {
      Alert.alert('Erreur', "Ce nom d'utilisateur est déjà utilisé");
      return;
    } else {
      Alert.alert('', 'Votre compte a bien été créé');
    }

    const user = {
      name: pseudoInput,
      pwd: pwdInput,
      email: '',
      phoneNumber: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      picture: '',
    };

    dispatch(userActions.addUser(user));
    setPseudoInput('');
    setPwdInput('');
    setPwdConfirmInput('');
    console.log(userBase);
  }, [dispatch, pseudoInput, pwdInput, pwdConfirmInput]);

  return (
    <SafeAreaView style={styles.screen}>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 25,
          marginBottom: 20,
        }}>
        Inscription
      </Text>

      <Image
        source={require('../assets/pictures/logo_freetogame.png')}
        style={styles.image}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={pseudoInput}
          onChangeText={setPseudoInput}
          placeholder={"Nom d'utilisateur"}
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={validPwd ? styles.mdpNotValid : styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={pwdInput}
          secureTextEntry={true}
          onChangeText={setPwdInput}
          placeholder={'Mot de Passe'}
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={!validConfirmPwd ? styles.mdpNotValid : styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={pwdConfirmInput}
          secureTextEntry={true}
          onChangeText={setPwdConfirmInput}
          placeholder={'Confirmation du mot de passe'}
          placeholderTextColor="#003f5c"
        />
      </View>

      <TouchableHighlight
        style={styles.registerButton}
        onPress={onRegisterButton}>
        <Text> S'INSCRIRE </Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.loginButton}>Se connecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282828',
  },
  image: {
    marginBottom: 40,
    width: 150,
    height: 150,
    borderRadius: 400 / 2,
  },
  inputView: {
    backgroundColor: '#6198ec',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  mdpNotValid: {
    backgroundColor: '#6198ec',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
    width: '70%',
    height: 45,
    marginBottom: 20,
  },
  registerButton: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#1482ff',
  },

  loginButton: {
    height: 30,
    marginTop: 20,
    color: '#fff',
  },
});

export default SignupScreen;
