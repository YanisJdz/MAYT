import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


import HomeScreen from '../views/HomeScreen.js';
import Page4 from '../views/Page4.js';
import CategoryListScreen from "../views/CategoryListScreen.js";
import GameListScreen from "../views/GameListScreen";
import GameDetailsScreen from "../views/GameDetailsScreen";
import SignupScreen from "../views/SignupScreen";
import LoginScreen from "../views/LoginScreen";
import ProfileScreen from "../views/ProfileScreen.js";

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === "News") {
            iconName = focused ? "ios-star" : "ios-star-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "ios-library" : "ios-library-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search-circle" : "search-circle-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "steelblue",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="News" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoryListScreen} />
      <Tab.Screen name="Search" component={Page4} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MyApp" component={TabNavigator} />
        <Stack.Screen name="GameList" component={GameListScreen}
                      options={({ route }) => ({
                        title: route.params.title,
                        headerShown: true,
                      })} />
        <Stack.Screen name="GameDetail" component={GameDetailsScreen}
                      options={({ route }) => ({
                        title: route.params.title,
                        headerShown: true,
                      })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
