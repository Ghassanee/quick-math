import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  Image,
} from 'react-native';

import colors from '../constants/colors';
import { windowWidth } from '../constants/dimensions';
import { formatTime } from '../util/globalFunctions';
import { MyText } from './MyText';

type HistoryCardProps = {
  onPress?: () => void;
  imageEquation: any;
};

export const HistoryCard = ({
  onPress = () => {},
  imageEquation,
}: HistoryCardProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [styles.container];
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  return (
    <View style={containerStyles}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.image_container}
      >
        <Image
          resizeMode="contain"
          style={styles.imageEquation}
          source={{ uri: imageEquation }}
        />
      </TouchableOpacity>
      <View style={styles.bottom_bar}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.delete}
            source={require('../../assets/icons/delete.png')}
          />
        </TouchableOpacity>
        <MyText style={textStyles}>
          {formatTime('Sat May 01 2022 06:19:27 GMT+0000 (GMT)')}
        </MyText>
      </View>
    </View>
  );
};
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
  imageEquation: {
    marginTop: 10,
    height: 25,
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
