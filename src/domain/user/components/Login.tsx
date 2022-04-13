import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
// import { Button as AtomButton } from 'react-native';
import TextInput from '../../../components/TextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import Link from '../../../components/Link';

const Login = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  return (
    <View style={styles.bg}>
      {/* <AtomButton title="login" /> */}
      <TextInput
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
      />
      <Icon name="rocket" size={30} color="#900" />
      <Icon name="rocket" size={30} color="#900" />
      <Icon name="rocket" size={30} color="#900" />
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
          Login with Facebook
        </Text>
      </Icon.Button>
      <View>
        <Link />
        <TouchableHighlight style={styles.btnDelete}>
          <Text style={styles.textDelete}> Delete &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textDelete: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
