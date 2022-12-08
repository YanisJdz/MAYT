import React, {useCallback, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
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
          color: 'black',
          fontSize: 25,
        }}>
        Inscription
      </Text>

      <Image
        source={require('../assets/pictures/1658862659257.jpeg')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 400 / 2,
        }}
      />

      <TextInput
        style={styles.formInput}
        value={pseudoInput}
        onChangeText={setPseudoInput}
        placeholder={'Pseudo'}
      />
      <TextInput
        style={validPwd ? styles.mdpNotValid : styles.formInput}
        value={pwdInput}
        secureTextEntry={true}
        onChangeText={setPwdInput}
        placeholder={'Mot de Passe'}
      />
      <TextInput
        style={!validConfirmPwd ? styles.mdpNotValid : styles.formInput}
        value={pwdConfirmInput}
        secureTextEntry={true}
        onChangeText={setPwdConfirmInput}
        placeholder={'Confirmation du mot de passe'}
      />
      <TouchableHighlight
        style={{
          borderColor: 'black',
          height: 50,
          width: 150,
          borderRadius: 400 / 2,
          borderWidth: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPressButton}>
        <Text> Envoyer </Text>
      </TouchableHighlight>

      {/*<View*/}
      {/*    style={{*/}
      {/*        flex: 1,*/}
      {/*        backgroundColor: 'red',*/}
      {/*    }}>*/}
      {/*</View>*/}
      {/*<View*/}
      {/*    style={{*/}
      {/*        flex: 1,*/}
      {/*        backgroundColor: 'green',*/}
      {/*        flexDirection: "row",*/}
      {/*        alignItems: "center",*/}
      {/*        justifyContent: "space-around",*/}
      {/*    }}>*/}
      {/*    <Button></Button>*/}
      {/*    <Button></Button>*/}
      {/*    <Button></Button>*/}

      {/*</View>*/}
      {/*<View*/}
      {/*    style={{*/}
      {/*        flex: 3,*/}
      {/*        backgroundColor: 'blue',}*/}
      {/*}>*/}

      {/*</View>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  formInput: {
    borderWidth: 1,
    backgroundColor: '#F0FFFF',
    height: 40,
    width: 250,
    borderRadius: 5,
  },
  mdpNotValid: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#F0FFFF',
    height: 40,
    width: 250,
    borderRadius: 5,
  },
});

export default SignupScreen;
