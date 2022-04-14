import React, { FC } from 'react';
import { Linking, Text, StyleSheet } from 'react-native';

interface LinkProps {
  text: String;
  url: string;
}

const Link: FC<LinkProps> = ({ text, url }) => {
  return (
    <Text style={styles.link} onPress={() => Linking.openURL(url)}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#FF6584',
  },
});

export default Link;
