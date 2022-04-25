import React, { memo, FC } from 'react';
import {
  StyleSheet,
  TextInput as Input,
  TextInputProps,
  View,
} from 'react-native';
import Theme from '../../../infraestructure/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Label from '../../atoms/Label';

type TextInputIconProps = TextInputProps & { icon: string; title: string };

const TextInputIcon: FC<TextInputIconProps> = ({ icon, title, ...props }) => {
  return (
    <View style={props.style}>
      <Label style={styles.text}>{title}</Label>
      <View style={styles.container}>
        <Icon name={icon} size={20} style={styles.icon} />
        <Input {...props} style={[styles.input]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: Theme.colors().COLOR_GRAY,
    borderColor: 'hsl(212, 33%, 60%)',
    width: '100%',
  },
  icon: {
    color: Theme.colors().COlOR_BLACK,
    paddingVertical: 8,
    paddingLeft: 8,
    marginVertical: 5,
    marginRight: 10,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
  },
});

export default memo(TextInputIcon);
