/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet } from 'react-native';

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
    backgroundColor: colors.border,
  },
});

type ListItemProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export const ListItem = ({
  title,
  subtitle,
  onPress = () => null,
}: ListItemProps) => {
  const rowStyles = [styles.row];

  return <HistoryCard onPress={onPress} />;
};

export const ListSeparator = () => <View style={styles.separator} />;
