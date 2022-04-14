import React, { memo, FC } from 'react';
import {
  StyleSheet,
  TextInput as Input,
  TextInputProps,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label from './Label';

type TextInputIconProps = TextInputProps & { icon: string; title: string };

const TextInputIcon: FC<TextInputIconProps> = ({ icon, title, ...props }) => {
  return (
    <>
      <Label>{title}</Label>
      <View style={styles.container}>
        <Icon name={icon} size={30} style={styles.icon} />
        <Input {...props} style={[styles.input, props.style]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#F0FFFF',
    borderColor: 'hsl(212, 33%, 60%)',
    width: '100%',
  },
  icon: {
    color: '#900',
    padding: 5,
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    width: '100%',
  },
});

export default memo(TextInputIcon);
