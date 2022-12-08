import React, {useCallback, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight, View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {actions as userActions} from "../redux/reducers/userReducer";


const SignupScreen = props => {
  const {navigation} = props;

  const userBase = useSelector(state => state.user.userBase);
  const dispatch = useDispatch();

  const [pseudoInput, setPseudoInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');
  const [pwdConfirmInput, setPwdConfirmInput] = useState('');

  const validPwd = useMemo(() => {
    return pwdInput.length <= 3 && pwdInput.length > 0;
  }, [pwdInput]);

  const validConfirmPwd = useMemo(() => {
    return pwdInput === pwdConfirmInput;
  }, [pwdConfirmInput, pwdInput]);

  const onPressButton = useCallback(() => {
    if (!pseudoInput || !pwdInput) {
      Alert.alert(
        `Erreur`, 'Veuillez entrer un pseudo et un mot de passe correct.'
      );
      return;
    }

    if (pwdInput !== pwdConfirmInput) {
      Alert.alert(
        `Erreur`, 'Le mot de passe et la vérification ne correspondent pas.'
      );
      return;
    }

    if (userBase.find(x => x.name === pseudoInput)) {
      Alert.alert(
        `Erreur`, "Ce pseudo est déjà utilisé"
      );
      return;
    }

    else {
      Alert.alert(
        ``, "Votre compte a bien été créé"
      );
    }


    const user = {
      name: pseudoInput,
      pwd: pwdInput
    }

    dispatch(userActions.addUser(user))
    setPseudoInput('');
    setPwdInput('');
    setPwdConfirmInput('');
    console.log(userBase)
  }, [dispatch, pseudoInput, pwdInput, pwdConfirmInput])

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

      <TextInput
        style={styles.TextInput}
        value={pseudoInput}
        onChangeText={setPseudoInput}
        placeholder={'Pseudo'}
        placeholderTextColor="#003f5c"
      />

      <TextInput
        style={validPwd ? styles.mdpNotValid : styles.TextInput}
        value={pwdInput}
        secureTextEntry={true}
        onChangeText={setPwdInput}
        placeholder={'Mot de Passe'}
        placeholderTextColor="#003f5c"
      />

      <TextInput
        style={!validConfirmPwd ? styles.mdpNotValid : styles.TextInput}
        value={pwdConfirmInput}
        secureTextEntry={true}
        onChangeText={setPwdConfirmInput}
        placeholder={'Confirmation du mot de passe'}
        placeholderTextColor="#003f5c"
      />


      <TouchableHighlight
        style={styles.loginBtn}
        onPress={onPressButton}>
        <Text> Envoyer </Text>
      </TouchableHighlight>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: "#282828",
  },
  image: {
    marginBottom: 40,
    width: 150,
    height: 150,
    borderRadius: 400 / 2,
  },
  inputView: {
    backgroundColor: "#6198ec",
    borderRadius: 30,
    width: "70%",
    height: 45,
  },
  TextInput: {
    backgroundColor: "#6198ec",
    borderRadius: 30,
    height: 45,
    width: "70%",
    padding: 10,
    marginLeft: 20,
    color: '#003f5c',
  },
  mdpNotValid: {
    backgroundColor: "#6198ec",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
    height: 45,
    width: "70%",
    padding: 10,
    marginLeft: 20,
    color: '#003f5c',
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1482ff",
  },
});

export default SignupScreen;
