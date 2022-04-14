import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Link from '../../../components/Link';
import TextInputIcon from '../../../components/TextInputIcon';
import dictionary from '../../../language/es/login.json';

const Login = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const URL = 'https://google.com';
  const FORGOT_PASS = 'Olvidaste tu password?';

  return (
    <View style={styles.container}>
      <TextInputIcon
        title={dictionary.LOGIN_EMAIL_LABEL}
        icon="user"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        placeholder="Email"
        autoCapitalize="none"
        maxLength={30}
      />

      <TextInputIcon
        title={dictionary.LOGIN_PASSWORD_LABEL}
        icon="lock"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry
        maxLength={20}
      />
      <View>
        <Link url={URL} text={FORGOT_PASS} />
        <CustomButton title={dictionary.SUBMIT_BUTTON_TEXT} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default Login;
