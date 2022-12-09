import React, { useEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {launchCamera} from "react-native-image-picker";

export default ProfileScreen = () => {
  const sessionData = useSelector(state => state.session.sessionData);
  const userBase = useSelector(state => state.user.userBase);
  const dispatch = useDispatch();
  const userData = userBase.find(x => x.name === sessionData["user"]);

  this.state = {
    filepath: {
      data: '',
      uri: ''
    },
    fileData: '',
    fileUri: ''
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }



  useEffect(() => {
    console.log(userData);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity onPress={launchCamera}>
        <Image style={styles.image} source={require("../assets/pictures/1658862659257.jpeg")} />
      </TouchableOpacity>
      <Text style={styles.text}>
        Username: {userData["name"]}
      </Text>
      <Text style={styles.text}>
        Email: {userData["email"]}
      </Text>
      <Text style={styles.text}>
        Password: {userData["pwd"]}
      </Text>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});

