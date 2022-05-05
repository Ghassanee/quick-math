import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  text: {
    color: colors.black,
    fontSize: 12,
  },
  icon: {
    height: 40,
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
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Image style={styles.icon} source={icon} resizeMode="contain" />
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};
