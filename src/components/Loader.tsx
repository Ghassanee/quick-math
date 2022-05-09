import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../constants/dimensions';

export default function Loader() {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 3,
        backgroundColor: '#00000080',
        height: windowHeight + 40,
        width: windowWidth,
        justifyContent: 'center',
        elevation: 2,
      }}
    >
      <ActivityIndicator size={50} color="red" />
    </View>
  );
}
