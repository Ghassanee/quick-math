import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Vibration, View } from 'react-native';
import { Main } from './Main';
import { History } from '../screens/History';

const Tab = createMaterialTopTabNavigator();
const ONE_SECOND_IN_MS = 1000;

export function BottomNavigator() {
  return (
    // @ts-ignore
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#fff' }}
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'My-Font',
          textTransform: 'capitalize',
          margin: 0,
          padding: 0,
        },
        tabBarItemStyle: { height: 50, margin: 0, padding: 10 },
        tabBarStyle: {
          backgroundColor: '#fff',
          margin: 0,
          paddingTop: 5,
          paddingBottom: 5,
        },
        swipeEnabled: false,
        tabBarIndicator: () => <View />,
        tabBarPressColor: 'transparent',
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            // @ts-ignore
            <MaterialCommunityIcons
              name="camera-outline"
              color={color}
              size={22}
            />
          ),
        }}
        listeners={{
          tabPress: () => {
            console.log('sss');

            Vibration.vibrate(0.1 * ONE_SECOND_IN_MS);
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            // @ts-ignore
            <MaterialCommunityIcons name="history" color={color} size={22} />
          ),
        }}
        listeners={{
          tabPress: () => {
            console.log('sss');

            Vibration.vibrate(0.1 * ONE_SECOND_IN_MS);
          },
        }}
      />
    </Tab.Navigator>
  );
}
