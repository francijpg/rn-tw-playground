import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button as AtomButton} from 'react-native';
import TextInput from '../../../components/TextInput';

const Login = () => {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  return (
    <View style={styles.bg}>
      <AtomButton title="login" />
      <TextInput
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
      />
      <View>
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
