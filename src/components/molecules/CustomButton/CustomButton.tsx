import React, { FC, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './CustomButton.style';

interface ButtonProps {
  isNegative?: Boolean;
  onPressFunction?: Function;
  title: String;
  style?: Object;
}

const CustomButton: FC<ButtonProps> = ({ title, onPressFunction, style }) => {
  const [isPressed, setPressedValue] = useState(false);
  return (
    <View style={[styles(false).container, style]}>
      <Pressable
        style={styles(isPressed).button}
        android_ripple={{ color: 'black' }}
        onPress={() => {
          if (onPressFunction != null) {
            onPressFunction();
          }
        }}
        onPressIn={() => setPressedValue(true)}
        onPressOut={() => setPressedValue(false)}>
        <Text style={styles(isPressed).text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
