/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// @ts-ignore
import AlgebraLatex from 'algebra-latex';
import { WebView } from 'react-native-webview';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { MainStackParams } from '../navigation/Main';
import { windowWidth } from '../constants/dimensions';
import { Button } from '../components/Button';
import { MyText } from '../components/MyText';

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
  React.useEffect(() => {
    navigation.setOptions({
      title: 'Updated!',
      headerRight: () => (
        // @ts-ignore
        <MaterialCommunityIcons
          onPress={onShare}
          name="share-variant-outline"
          size={22}
        />
      ),
      headerRightContainerStyle: {
        marginRight: 20,
      },
    });
  });

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share this solution with friends',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error);
    }
  };

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
          font-family: "My-Font-Regular", "Merriweather", "Georgia", serif;
        }
        
        </style>
      </p>
    </body>
  </html>`;
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.inner_container}>
        <View>
          <MyText style={styles.title_text}>Your equation :</MyText>
          <Image
            style={styles.equation}
            source={{
              uri: imageEquation,
            }}
            resizeMode="center"
          />
        </View>
        <View>
          <MyText style={styles.title_text}>Your solution :</MyText>
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
      <MyText style={styles.title}>Graph</MyText>
      {
        // @ts-ignore
        <WebView
          containerStyle={[
            styles.inner_container,
            {
              padding: 10,
              marginTop: 0,
            },
          ]}
          source={{
            html: renderHtmlPlot(),
          }}
        />
      }
      {/* <Button onPress={onShare} title="Share" /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
    width: windowWidth,
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  container_content: {
    alignItems: 'center',
  },
  title_text: {
    fontSize: 16,
    fontFamily: 'My-Font',
  },
  inner_container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginVertical: 7,
    width: windowWidth - 30,
    elevation: 1,
    padding: 20,
    marginTop: 20,
    minHeight: 300,
  },
  equation: {
    marginBottom: 15,
    height: 50,
  },
  solution: {
    marginBottom: 15,
    height: 50,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
});
