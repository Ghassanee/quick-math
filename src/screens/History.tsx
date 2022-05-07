import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ListItem, ListSeparator } from '../components/List';
import { windowWidth } from '../constants/dimensions';
import { MyText } from '../components/MyText';

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
  navigation: any;
};

export const History = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={['#ADC4F1', '#91ACDF40']} style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.clear_text}>
        <MyText>Clear all</MyText>
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
            equation="x^2+1=13"
            onPress={() =>
              navigation.navigate('Solution', {
                screen: 'Solution',
                params: { solution: 'x1=1 , x2=4', equation: 'x^2+1=13' },
              })
            }
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
    </LinearGradient>
  );
};
