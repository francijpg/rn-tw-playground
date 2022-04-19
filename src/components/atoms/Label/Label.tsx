import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
  style: Object;
};

const Label = ({ children, style }: Props) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#000',
  },
});

export default memo(Label);
