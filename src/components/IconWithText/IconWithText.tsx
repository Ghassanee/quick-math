/* eslint-disable no-unused-vars */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import images from '../../theme/images';
import { MyText } from '../MyText';

const styles = StyleSheet.create({
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    top: 100,
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});

const IconWithText = ({ icon, onPress, text }: any) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <MyText>{text}</MyText>
      <Image source={images.calculator_icon} />
    </TouchableOpacity>
  );
};

export default IconWithText;
