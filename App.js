import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./AppNavigator";


import Navigation from './components/Navigation';

export default App = () => {

  const isDarkMode = useColorScheme() === "dark";

  let persistor = persistStore(store);


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation></Navigation>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});
