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

let camera: Camera;
export default function OriginalCamera(props: any) {
  const [startCamera, setStartCamera] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [takingPicture, setTakingPicture] = useState(false);
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
    setTakingPicture(true);
    const photo: any = await camera.takePictureAsync();
    setTakingPicture(false);
    setPreviewVisible(true);
    // setStartCamera(false)
    setCapturedImage(photo);
    getEquation(photo);
  };

  const __savePhoto = () => {};
  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };

  const __switchCamera = () => {
    if (cameraType === 'back') {
      setCameraType(Camera.Constants.Type.front);
    } else {
      setCameraType(Camera.Constants.Type.back);
    }
  };
  return (
    <View style={styles.container}>
      {startCamera ? (
        <View
          style={{
            flex: 1,
            width: '100%',
          }}
        >
          {takingPicture && <Loader />}
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              savePhoto={__savePhoto}
              retakePicture={__retakePicture}
            />
          ) : (
            <Camera
              type={cameraType}
              // @ts-ignore
              flashMode={props.flashMode}
              style={{ flex: 1 }}
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
                    left: '5%',
                    top: '10%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* <TouchableOpacity
                    onPress={__handleFlashMode}
                    // @ts-ignore
                    style={{
                      backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                      borderRadius: 50,
                      height: 25,
                      width: 25,
                    }}
                  >
                    <MyText
                      style={{
                        fontSize: 20,
                      }}
                    >
                      ⚡️
                    </MyText>
                  </TouchableOpacity> */}
                  {/* <TouchableOpacity
                    onPress={__switchCamera}
                    // @ts-ignore
                    style={{
                      marginTop: 20,
                      borderRadius: 50,
                      height: 25,
                      width: 25,
                    }}
                  >
                    <MyText
                      style={{
                        fontSize: 20,
                      }}
                    >
                      {cameraType === 'front' ? '🤳' : '📷'}
                    </MyText>
                  </TouchableOpacity> */}
                </View>
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
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#000',
          }}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CameraPreview = ({ photo, retakePicture, savePhoto }: any) => {
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
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              padding: 15,
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                onPress={retakePicture}
                style={{
                  width: 130,
                  height: 40,

                  alignItems: 'center',
                  borderRadius: 4,
                }}
              >
                <MyText
                  style={{
                    color: '#fff',
                    fontSize: 20,
                  }}
                >
                  Re-take
                </MyText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={savePhoto}
                style={{
                  width: 130,
                  height: 40,

                  alignItems: 'center',
                  borderRadius: 4,
                }}
              >
                <MyText
                  style={{
                    color: '#fff',
                    fontSize: 20,
                  }}
                >
                  save photo
                </MyText>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      }
    </View>
  );
};
