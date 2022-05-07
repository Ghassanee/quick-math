import React from 'react';
import { Text } from 'react-native';

export const MyText = (props: any) => (
  <Text {...props} style={[{ fontFamily: 'My-Font' }, props.style]}>
    {props.children}
  </Text>
);
