/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from '../components/Camera';
import { windowHeight, windowWidth } from '../constants/dimensions';

export default function TakePicture() {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
  },
});
