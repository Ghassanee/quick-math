/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
// @ts-ignore
import AlgebraLatex from 'algebra-latex';
import { getEquation } from '../api/readImage';
import { Button } from '../components/Button';
import { windowWidth } from '../constants/dimensions';

export default function CalculatorComp() {
  const [text, onChangeText] = useState('');
  const [imageEquation, setimageEquation] = useState(
    'https://latex.codecogs.com/gif.latex?\\huge&space;exp(x)+log(y)=2',
  );
  const timeout = React.useRef();
  const changeText = (value: string) => {
    // clearTimeout(timeout.current);
    onChangeText(value.toLowerCase());
    // @ts-ignore
    timeout.current = setTimeout(() => {
      try {
        const algebraObj = new AlgebraLatex().parseMath(value.toLowerCase());
        setimageEquation(
          `https://latex.codecogs.com/gif.latex?\\huge&space;${algebraObj.toLatex()}`,
        );
      } catch (error) {}
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
        resizeMode="center"
      />
      <View style={styles.button}>
        <Button name="solve" onPress={() => {}} type="outline" key={1} />
      </View>
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
    height: 50,
    width: windowWidth,
    top: 140,
  },
  button: {
    top: 250,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
