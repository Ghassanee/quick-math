/* eslint-disable no-unused-vars */
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import colors from '../constants/colors';
import { MyText } from './MyText';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonColor,
    paddingVertical: 10,
    borderRadius: 10,
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  text: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});

type ButtonProps = {
  onPress: () => void;
  name: string;
  type?: 'outline';
};

export const Button = ({
  onPress = () => {},
  name = '',
  type,
}: ButtonProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [styles.container];
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <MyText style={textStyles}>{name}</MyText>
    </TouchableOpacity>
  );
};
