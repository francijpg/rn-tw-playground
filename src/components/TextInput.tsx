import React, { memo, FC } from 'react';
import {
  StyleSheet,
  // Text,
  TextInput as RnTextInput,
  TextInputProps,
  View,
} from 'react-native';

// type Props = {
//   props: TextInputProps;
//   errorText?: string;
// };

const TextInput: FC<TextInputProps> = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <RnTextInput {...props} style={[styles.input, props.style]} />
      {/* {errorText ? <Text style={styles.error}>{errorText}</Text> : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  icon: {
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F0FFFF',
    borderRadius: 15,
    borderColor: 'hsl(212, 33%, 60%)',
  },
  error: {
    fontSize: 14,
    color: '#FF6347',
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(TextInput);
