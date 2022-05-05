import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LinearGradient } from 'expo-linear-gradient';
import { ListItem, ListSeparator } from '../components/List';
import { MainStackParams } from '../navigation/Main';
import { windowWidth } from '../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    paddingTop: 50,
  },
  container_content: {
    alignItems: 'center',
  },
  clear_text: {
    alignSelf: 'flex-end',
    marginRight: 15,
  },
});

const screens = [
  {
    title: 'Text',
    subtitle: 'An example of using the Text.js components.',
    target: 'TextDemo',
  },
  {
    title: 'Form',
    subtitle: 'An example of using the Form.js components.',
    target: 'FormDemo',
  },
  {
    title: 'Button',
    subtitle: 'An example of using the Button.js components.',
    target: 'ButtonDemo',
  },
];

type Props = {
  navigation: StackNavigationProp<MainStackParams, 'History'>;
};

export const History = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={['#ADC4F1', '#91ACDF40']} style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.clear_text}>
        <Text>Clear all</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.container}
        data={screens}
        contentContainerStyle={styles.container_content}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.subtitle}
            // @ts-ignore
            // Disabling the next line because all the item.targets are valid - that data just
            // isn't getting picked up by TypeScript
            onPress={() => navigation.push('Solution')}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
    </LinearGradient>
  );
};
