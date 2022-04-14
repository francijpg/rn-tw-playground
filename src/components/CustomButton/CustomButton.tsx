import React, { FC, useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import styles from './CustomButton.style';

interface ButtonProps {
  isNegative?: Boolean;
  onPressFunction?: Function;
  title: String;
}

const CustomButton: FC<ButtonProps> = ({ title, onPressFunction }) => {
  const [isPressed, setPressedValue] = useState(false);
  return (
    <Pressable
      style={styles(isPressed).button}
      onPress={() => {
        if (onPressFunction != null) {
          onPressFunction();
        }
      }}
      onPressIn={() => setPressedValue(true)}
      onPressOut={() => setPressedValue(false)}>
      <Text style={styles(isPressed).text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
