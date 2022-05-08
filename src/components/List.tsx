/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

// @ts-ignore
import AlgebraLatex from 'algebra-latex';
import colors from '../constants/colors';
import { HistoryCard } from './HistoryCard';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  titleText: {
    fontWeight: 'bold',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
    marginTop: 5,
  },
});

type ListItemProps = {
  title: string;
  subtitle: string;
  equation: string;
  onPress: () => void;
};

export const ListItem = ({
  title,
  subtitle,
  equation,
  onPress = () => null,
}: ListItemProps) => {
  const rowStyles = [styles.row];
  const [imageEquation, setimageEquation] = useState(
    'https://latex.codecogs.com/gif.latex?\\huge&space;2X + 4 = 0',
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
  }, []);
  return <HistoryCard imageEquation={imageEquation} onPress={onPress} />;
};

export const ListSeparator = () => <View style={styles.separator} />;
