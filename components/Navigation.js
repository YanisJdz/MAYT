import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import Page1 from '../views/Page1.js';
import Page2 from '../views/Page2.js';
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
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'ios-library' : 'ios-library-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'steelblue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Profile" component={Page1} />
      <Tab.Screen name="News" component={Page2} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;