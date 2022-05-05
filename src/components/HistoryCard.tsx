import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  Image,
} from 'react-native';

import colors from '../constants/colors';
import { windowWidth } from '../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondarybg,
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
  },
  image_container: {
    borderRadius: 20,
    backgroundColor: colors.primarybg,
    height: 100,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  delete: {
    alignSelf: 'flex-end',
    right: 10,
    top: 15,
    position: 'absolute',
  },
  bottom_bar: {
    height: 40,
    justifyContent: 'center',
  },
});

type HistoryCardProps = {
  onPress?: () => void;
};

export const HistoryCard = ({ onPress = () => {} }: HistoryCardProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [styles.container];
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  return (
    <View style={containerStyles}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.image_container}
      >
        <Text style={textStyles}>image</Text>
      </TouchableOpacity>
      <View style={styles.bottom_bar}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.delete}
            source={require('../../assets/icons/delete.png')}
          />
        </TouchableOpacity>
        <Text style={textStyles}>time</Text>
      </View>
    </View>
  );
};
