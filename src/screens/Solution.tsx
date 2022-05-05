import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import { MainStackParams } from '../navigation/Main';
import { windowWidth } from '../constants/dimensions';
import { Button } from '../components/Button';

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
  inner_containrt: {
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
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
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

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'Solution'>;
};

export const Solution = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={['#ADC4F1', '#91ACDF40']} style={styles.container}>
      <View style={styles.inner_containrt}>
        <View>
          <Text style={styles.title_text}>Your equation :</Text>
          <Text style={styles.equation}>2X + 4 = 0</Text>
        </View>
        <View>
          <Text style={styles.title_text}>Your solution :</Text>
          <Text style={styles.equation}>X1 = 4 , X2 = 2</Text>
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
      <View style={styles.inner_containrt} />
    </LinearGradient>
  );
};
