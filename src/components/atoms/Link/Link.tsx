import React, { FC } from 'react';
import { Linking, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors';

interface LinkProps {
  text: String;
  url: string;
  style?: Object;
}

const Link: FC<LinkProps> = ({ text, url, style }) => {
  return (
    <Text style={[styles.link, style]} onPress={() => Linking.openURL(url)}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: Colors.COLOR_PRINCIPAL,
  },
});

export default Link;
