/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LinearGradient } from 'expo-linear-gradient';
// @ts-ignore
import AlgebraLatex from 'algebra-latex';
import { WebView } from 'react-native-webview';
import colors from '../constants/colors';
import { MainStackParams } from '../navigation/Main';
import { windowWidth } from '../constants/dimensions';
import { Button } from '../components/Button';

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'Solution'>;
  route: any;
};

export const Solution = ({ route, navigation }: Props) => {
  const { equation, solution } = route.params.params;

  const [imageEquation, setimageEquation] = useState(
    'https://latex.codecogs.com/gif.latex?\\huge&space;2X + 4 = 0',
  );
  const [imageSolution, setimageSolution] = useState(
    'https://latex.codecogs.com/gif.latex?\\huge&space;exp(x)+log(y)=2',
  );
  useEffect(() => {
    try {
      const equation_ = new AlgebraLatex().parseMath(equation.toLowerCase());

      setimageEquation(
        `https://latex.codecogs.com/gif.latex?\\huge&space;${equation_.toLatex()}`,
      );
    } catch (error) {
      setimageEquation(
        `https://latex.codecogs.com/gif.latex?\\huge&space;${equation.toLowerCase()}`,
      );
    }
    try {
      const solution_ = new AlgebraLatex().parseMath(solution.toLowerCase());
      setimageSolution(
        `https://latex.codecogs.com/gif.latex?\\huge&space;${solution_.toLatex()}`,
      );
    } catch (error) {
      setimageSolution(
        `https://latex.codecogs.com/gif.latex?\\huge&space;${solution.toLowerCase()}`,
      );
    }
  }, []);
  const renderHtmlPlot = () => {
    return `<!DOCTYPE html>
  <html lang="en">
    <head> </head>
    <body>
      <div id="quadratic"></div>
      <p>
        <script src="https://unpkg.com/function-plot/dist/function-plot.js"></script>
        <script>
          functionPlot({
            target: '#quadratic',
            width:${1000},
  height:700,
  grid: true,
            data: [
              {
                fn: '${equation.split('=')[0]}',
              },
            ],
          });
        </script>
        <style>
        text {
          font-size: 24px;
          fill: $text;
          font-family: "Computer Modern Serif", "Merriweather", "Georgia", serif;
        }
        
        </style>
      </p>
    </body>
  </html>`;
  };
  return (
    <LinearGradient colors={['#ADC4F1', '#91ACDF40']} style={styles.container}>
      <View style={styles.inner_container}>
        <View>
          <Text style={styles.title_text}>Your equation :</Text>
          <Image
            style={styles.equation}
            source={{
              uri: imageEquation,
            }}
            resizeMode="center"
          />
        </View>
        <View>
          <Text style={styles.title_text}>Your solution :</Text>
          <Image
            style={styles.solution}
            source={{
              uri: imageSolution,
            }}
            resizeMode="center"
          />
        </View>
        <View style={styles.button}>
          <Button
            name="Steps"
            onPress={() => {
              navigation.push('Steps');
            }}
          />
        </View>
      </View>
      <Text style={styles.title}>Graph</Text>
      <WebView
        containerStyle={[
          styles.inner_container,
          {
            borderRadius: 25,
            padding: 10,
          },
        ]}
        source={{
          html: renderHtmlPlot(),
        }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    paddingTop: 50,
    alignItems: 'center',
  },
  container_content: {
    alignItems: 'center',
  },
  title_text: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inner_container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginVertical: 7,
    width: windowWidth - 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 20,
    marginTop: 50,
    minHeight: 300,
  },
  equation: {
    marginTop: 10,
    height: 50,
  },
  solution: {
    marginTop: 10,
    height: 50,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
});
