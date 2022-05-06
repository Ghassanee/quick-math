/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { windowWidth } from '../constants/dimensions';

export default function CalculatorComp() {
  const [text, onChangeText] = useState('');
  const [imageEquation, setimageEquation] = useState(
    'https://latex.codecogs.com/gif.latex?exp(x)+log(y)=2',
  );
  const timeout = React.useRef();
  const changeText = (value: string) => {
    clearTimeout(timeout.current);
    onChangeText(value);
    // @ts-ignore
    timeout.current = setTimeout(() => {
      console.log(`https://latex.codecogs.com/gif.latex?${value}`);

      setimageEquation(`https://latex.codecogs.com/gif.latex?${value}`);
    }, 1000);
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={changeText}
        value={text}
        placeholder="exp(x)+log(y)=2"
        autoFocus
      />
      <Image
        style={styles.latexEquation}
        source={{
          uri: imageEquation,
        }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 80,
    padding: 10,
    top: 100,
    fontSize: 18,
  },
  latexEquation: {
    height: 20,
    width: windowWidth,
    top: 140,
  },
});
