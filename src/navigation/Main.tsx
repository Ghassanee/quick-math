import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Solution } from '../screens/Solution';
import { Steps } from '../screens/Steps';
import CalculatorComp from '../screens/CalculatorComp';
import EditImage from '../screens/EditImage';
import Info from '../screens/Info';

export type MainStackParams = {
  Home: any;
  TextDemo: any;
  FormDemo: any;
  ButtonDemo: any;
  Solution: any;
  Steps: any;
  Calculator: any;
  EditImage: any;
  Info: any;
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
    initialRouteName="Info"
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />

    <MainStack.Screen
      name="Solution"
      component={Solution}
      options={{
        headerTitle: 'Solution',
        headerStyle: {
          shadowColor: '#00000090',
          height: 100,
        },
        headerTitleStyle: {
          fontFamily: 'My-Font',
        },
      }}
    />
    <MainStack.Screen
      name="Info"
      component={Info}
      options={{
        headerTitle: 'Info',
        headerStyle: {
          shadowColor: '#00000090',
          height: 100,
        },
        headerTitleStyle: {
          fontFamily: 'My-Font',
        },
      }}
    />
    <MainStack.Screen
      name="Steps"
      component={Steps}
      options={{
        headerTitle: 'Steps',
      }}
    />

    <MainStack.Screen
      name="Calculator"
      component={CalculatorComp}
      options={{
        headerTitle: 'Insert',
      }}
    />

    <MainStack.Screen
      name="EditImage"
      component={EditImage}
      options={{
        headerTitle: 'Edit Image',
      }}
    />
  </MainStack.Navigator>
);
