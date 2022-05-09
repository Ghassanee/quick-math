import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { LogBox } from 'react-native';
import { BottomNavigator } from './navigation/BottomNavigator';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(
          'My-Font',
          require('../assets/fonts/Poppins-Regular.ttf'),
        );
        await Font.loadAsync(
          'My-Font-Thin',
          require('../assets/fonts/Poppins-Thin.ttf'),
        );
        await Font.loadAsync(
          'My-Font-Bold',
          require('../assets/fonts/Poppins-Bold.ttf'),
        );

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor="#ffffff" />
    </>
  );
}
