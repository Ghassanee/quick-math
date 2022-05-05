/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import { MainStackParams } from '../navigation/Main';
import { windowHeight, windowWidth } from '../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    paddingTop: 50,
    alignItems: 'center',
  },

  inner_containrt: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginVertical: 7,
    width: windowWidth - 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 20,
    marginTop: 50,
    minHeight: windowHeight - 100,
  },
});

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'Steps'>;
};

export const Steps = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={['#ADC4F1', '#91ACDF40']} style={styles.container}>
      <View style={styles.inner_containrt} />
    </LinearGradient>
  );
};
