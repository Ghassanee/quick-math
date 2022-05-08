import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Main } from './Main';
import { History } from '../screens/History';

const Tab = createMaterialBottomTabNavigator();

export function BottomNavigator() {
  return (
    // @ts-ignore
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            // @ts-ignore
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color }) => (
            // @ts-ignore
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
