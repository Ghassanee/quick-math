/* eslint-disable prettier/prettier */
import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../constants/dimensions';

export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        zIndex: 99,
        backgroundColor: '#00000080',
        height: windowHeight + 40,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size={50} color="red" />
    </View>
  );
}
