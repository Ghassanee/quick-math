import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function CalculatorComp() {
  return (
    <View style={styles.container}>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
