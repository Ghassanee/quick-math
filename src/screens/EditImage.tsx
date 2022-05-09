/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { MyText } from '../components/MyText';

export default function EditImage({ route, navigation }: any) {
  const { photo } = route.params.params;
  console.log(route);

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      {
        // @ts-ignore
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1,
          }}
        />
      }
    </View>
  );
}
