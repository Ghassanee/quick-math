/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import Loader from './Loader';
import { getEquation } from '../api/readImage';
import { MyText } from './MyText';
import { windowHeight, windowWidth } from '../constants/dimensions';

let camera: Camera;
export default function OriginalCamera({ navigation, flashMode, onLoad }: any) {
  const [startCamera, setStartCamera] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const isFocused = useIsFocused();
  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  };
  useEffect(() => {
    if (isFocused) {
      __startCamera();
    } else {
      setStartCamera(false);
    }
  }, [isFocused]);

  const __takePicture = async () => {
    onLoad(true);
    const photo: any = await camera.takePictureAsync();
    setPreviewVisible(true);
    onLoad(false);

    navigation.push('EditImage', {
      photo,
    });
    // setStartCamera(false)
    setCapturedImage(photo);
    getEquation(photo);
  };

  if (!startCamera) {
    return (
      <View
        style={{
          backgroundColor: '#000',
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Camera
        type={cameraType}
        // @ts-ignore
        flashMode={flashMode}
        style={{ flex: 1, height: windowHeight, width: windowWidth }}
        ref={r => {
          // @ts-ignore
          camera = r;
        }}
        ratio="16:9"
      >
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={__takePicture}
                style={{
                  width: 80,
                  height: 80,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  borderWidth: 3,
                  borderColor: 'tomato',
                  elevation: 7,
                  shadowColor: '#000',
                }}
              />
            </View>
          </View>
        </View>
      </Camera>
      <StatusBar style="dark" backgroundColor="#ffffff90" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
