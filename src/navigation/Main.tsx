import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { History } from '../screens/History';
import { Solution } from '../screens/Solution';
import { Steps } from '../screens/Steps';
import TakePicture from '../screens/TakePicture';
import CalculatorComp from '../screens/CalculatorComp';

export type MainStackParams = {
  Home: undefined;
  TextDemo: undefined;
  History: undefined;
  FormDemo: undefined;
  ButtonDemo: undefined;
  Solution: undefined;
  Steps: undefined;
  TakePicture: undefined;
  Calculator: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();
const forFade = ({ current }: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
export const Main = () => (
  // @ts-ignore
  <MainStack.Navigator
    screenOptions={{ cardStyleInterpolator: forFade }}
    initialRouteName="Home"
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />

    <MainStack.Screen
      name="History"
      component={History}
      options={{
        headerTitle: 'History',
        headerTransparent: true,
      }}
    />
    <MainStack.Screen
      name="Solution"
      component={Solution}
      options={{
        headerTitle: 'Solution',
        headerTransparent: true,
      }}
    />
    <MainStack.Screen
      name="Steps"
      component={Steps}
      options={{
        headerTitle: 'Steps',
        headerTransparent: true,
      }}
    />
    <MainStack.Screen
      name="TakePicture"
      component={TakePicture}
      options={{
        headerTitle: 'TakePicture',
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="Calculator"
      component={CalculatorComp}
      options={{
        headerTitle: 'Insert',
      }}
    />
  </MainStack.Navigator>
);
