import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, Alert,
} from "react-native";
import { actions as sessionActions } from "../redux/reducers/sessionReducer";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const userBase = useSelector(state => state.user.userBase);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const goToSignup = useCallback(() => {
      navigation.navigate("Signup");
    }, [navigation],
  );

  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
  };

  const onLoginButton = useCallback(() => {
    if (!username || !password) {
      return;
    }

    if (userBase.find(x => x.name === username && x.pwd === password)) {
      navigation.navigate("MyApp");
    } else {
      Alert.alert(
        "", "Nom d'utilisateur ou mot de passe incorrect",
      );
      return;
    }

    dispatch(sessionActions.setSession(username));
    console.log("logged as " + username);
  }, [dispatch, username, password]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/pictures/logo_freetogame.png")} />

      <View style={styles.inputView}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.TextInput}
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.TextInput}
          placeholder="Mot de passe"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onLoginButton}
                        style={styles.loginBtn}>
        <Text>SE CONNECTER</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToSignup}>
        <Text style={styles.signupButton}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 200,
    height: 200,
  },

  inputView: {
    backgroundColor: "#6198ec",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#fff",
  },

  signupButton: {
    height: 30,
    marginTop: 20,
    color: "#fff",
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

export default LoginScreen;
