import React from 'react';
import { Linking, Text } from 'react-native';

const Link = () => {
  return (
    <Text
      style={{ color: '#FF6584' }}
      onPress={() => Linking.openURL('http://google.com')}>
      Olvidaste tu password?
    </Text>
  );
};

export default Link;
