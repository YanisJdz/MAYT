import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Profile from '../views/Profile.js';
import Profile_modif from '../views/Profile_modif.js';
import Page3 from '../views/Page3.js';
import Page4 from '../views/Page4.js';

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'steelblue',
        tabBarInactiveTintColor: 'lightsteelblue',
      })}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="News" component={Page3} />
      <Tab.Screen name="Categories" component={Page3} />
      <Tab.Screen name="Search" component={Page4} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'MyApp'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MyApp" component={TabNavigator} />
        <Stack.Screen name={'Profile_modif'} component={Profile_modif} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
