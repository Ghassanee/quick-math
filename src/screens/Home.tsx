/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import colors from '../constants/colors';
import { MainStackParams } from '../navigation/Main';
import { IconWithText } from '../components/IconWithText';
import { windowHeight, windowWidth } from '../constants/dimensions';
import { MyText } from '../components/MyText';
import OriginalCamera from '../components/Camera';
import Loader from '../components/Loader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  history: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  instructions: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  calculator: {
    position: 'absolute',
    top: windowHeight - 150,
    left: 50,
  },
  image: {
    position: 'absolute',
    top: windowHeight - 150,
    right: 50,
  },
  take_picture: {},
  take_picture_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  take_picture_text: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'My-Font-Bold',
  },
});

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'Home'>;
};

export const Home = ({ navigation }: Props) => {
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [flashMode, setFlashMode] = useState('off');
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const __handleFlashMode = () => {
    if (flashMode === 'on') {
      setFlashMode('off');
    } else if (flashMode === 'off') {
      setFlashMode('on');
    } else {
      setFlashMode('auto');
    }
  };
  return (
    <View
      style={{
        position: 'absolute',
        flex: 1,
        zIndex: 1,
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <IconWithText
        onPress={__handleFlashMode}
        title="Flash"
        icon={
          flashMode === 'off'
            ? require('../../assets/icons/flashOn.png')
            : require('../../assets/icons/flashOff.png')
        }
        style={styles.history}
      />
      <IconWithText
        onPress={() => {}}
        title="Instructions"
        icon={require('../../assets/icons/instructions.png')}
        style={styles.instructions}
      />
      <IconWithText
        onPress={() => {
          navigation.push('Calculator', {
            name: 'lol',
          });
        }}
        title="Calculator"
        icon={require('../../assets/icons/calculator.png')}
        style={styles.calculator}
      />
      <IconWithText
        onPress={pickImage}
        title="Upload"
        icon={require('../../assets/icons/image.png')}
        style={styles.image}
      />
      {loading && <Loader />}

      <OriginalCamera
        onLoad={(val: boolean) => setLoading(val)}
        navigation={navigation}
        flashMode={flashMode}
      />
    </View>
  );
};
