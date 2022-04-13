import React, {FC} from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ButtonProps {
  isNegative?: Boolean;
  onPress?: Function;
  texto: String;
}
const PLATFORM_IOS = 'ios';

const CustomButton: FC<ButtonProps> = ({texto}) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{texto}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 56,
    elevation: 3,
    backgroundColor:
      Platform.OS === PLATFORM_IOS ? 'transparent' : Colors.COLOR_PRINCIPAL,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color:
      Platform.OS === PLATFORM_IOS
        ? Colors.COLOR_PRINCIPAL
        : Colors.COLOR_WHITE,
  },
});

export default CustomButton;
