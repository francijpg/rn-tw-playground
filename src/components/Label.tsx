import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Label = ({ children }: Props) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default memo(Label);
