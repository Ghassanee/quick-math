import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import { MainStackParams } from '../navigation/Main';
import { IconWithText } from '../components/IconWithText';
import { windowHeight } from '../constants/dimensions';

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
  },
});

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'Home'>;
};

export const Home = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={['#ADC4F1', '#91ACDF40']} style={styles.container}>
      <IconWithText
        onPress={() => {
          navigation.push('History');
        }}
        title="History"
        icon={require('../../assets/icons/history.png')}
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
          navigation.push('Calculator');
        }}
        title="Calculator"
        icon={require('../../assets/icons/calculator.png')}
        style={styles.calculator}
      />
      <IconWithText
        onPress={() => {}}
        title="Upload"
        icon={require('../../assets/icons/image.png')}
        style={styles.image}
      />

      <View style={styles.take_picture_container}>
        <Text style={styles.take_picture_text}>Tap to take a picture </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push('TakePicture');
          }}
        >
          <Image
            style={styles.take_picture}
            source={require('../../assets/take_picture.png')}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
