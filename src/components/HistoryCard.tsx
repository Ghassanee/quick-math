/* eslint-disable no-unused-vars */
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
          resizeMode="repeat"
          resizeMethod="auto"
          style={styles.imageEquation}
          // source={{ uri: imageEquation }}
          source={require('../../assets/example.jpeg')}
        />
      </TouchableOpacity>
      <View style={styles.bottom_bar}>
        <MyText style={textStyles}>
          {formatTime('Sat May 08 2022 12:49:27 GMT+0000 (GMT)')}
        </MyText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    width: windowWidth - 30,
  },
  image_container: {
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#00000040',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  imageEquation: {
    marginTop: 10,
  },
  text: {
    color: '#000000',
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
    marginLeft: 10,
    fontFamily: 'My-Font-Thin',
  },

  delete: {
    alignSelf: 'flex-end',
    right: 10,
    top: 15,
    position: 'absolute',
  },
  bottom_bar: {
    height: 20,
    justifyContent: 'center',
  },
});
