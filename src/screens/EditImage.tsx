/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import { ImageManipulator } from 'expo-image-crop';

import { Button } from '../components/Button';
import { MyText } from '../components/MyText';

export default function EditImage({ route, navigation }: any) {
  const { photo } = route.params;
  const { uri } = photo;

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
        >
          <ImageManipulator
            onToggleModal={() => {
              navigation.pop(1);
            }}
            photo={{ uri }}
            isVisible
          />
        </ImageBackground>
      }
    </View>
  );
}
