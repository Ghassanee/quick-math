/* eslint-disable no-unused-vars */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
  ImageSourcePropType,
  Text,
} from 'react-native';

import colors from '../constants/colors';
import { MyText } from './MyText';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff50',
    height: 35,
    width: 35,
    justifyContent: 'center',
    borderRadius: 15,
    position: 'absolute',
    zIndex: 2,
    shadowColor: '#000',

    elevation: 1,
  },

  text: {
    color: colors.black,
    fontSize: 12,
  },
  icon: {
    height: 15,
  },
});

type IconWithTextProps = {
  onPress: () => void;
  icon: ImageSourcePropType;
  title: string;
  style?: StyleProp<ViewStyle>;
};

export const IconWithText = ({
  onPress = () => {},
  icon,
  title,
  style,
}: IconWithTextProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [styles.container, style];

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Image style={styles.icon} source={icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
