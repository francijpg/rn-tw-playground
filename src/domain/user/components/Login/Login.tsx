import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Checkbox,
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
  Text,
} from 'react-native-paper';
import { RoutesStr, Strings } from '../../../../assets/string';
import CustomButton from '../../../../components/molecules/CustomButton';
import Link from '../../../../components/atoms/Link';
import TextInputIcon from '../../../../components/molecules/TextImputIcon/TextInputIcon';
import dictionary from '../../../../language/es/login.json';
import styles from './Login.style';
import LoginHeader from '../../../../components/organisms/LoginHeader/LoginHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Theme from '../../../../infraestructure/theme';

const Login = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [checkbox, setCheckbox] = useState(false);

  const URL = 'https://google.com';
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const goToApi = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: RoutesStr.API_SCREEN,
        },
      ],
    });
  };
  const theme = {
    ...DefaultTheme,
    fonts: configureFonts(Theme.fonts()),
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.page}>
        <LoginHeader />
        <View style={styles.container}>
          <TextInputIcon
            title={dictionary.LOGIN_EMAIL_LABEL}
            icon="email-outline"
            value={email.value}
            onChangeText={text => setEmail({ value: text, error: '' })}
            placeholder={Strings.PLACEHOLDER_EMAIL}
            autoCapitalize="none"
            maxLength={30}
            style={styles.inputText}
          />
          <TextInputIcon
            title={dictionary.LOGIN_PASSWORD_LABEL}
            style={styles.inputText}
            icon="lock-outline"
            value={password.value}
            onChangeText={text => setPassword({ value: text, error: '' })}
            placeholder={Strings.PLACEHOLDER_PASSWORD}
            autoCapitalize="none"
            secureTextEntry
            maxLength={20}
          />
          <View style={styles.passwordContainer}>
            <Checkbox.Item
              style={styles.checkbox}
              label={Strings.REMEMBERME}
              labelStyle={styles.passwordText}
              status={checkbox ? 'checked' : 'unchecked'}
              color={Theme.colors().COLOR_PRINCIPAL}
              position="leading"
              onPress={() => {
                setCheckbox(!checkbox);
              }}
            />
            <Link
              url={URL}
              text={Strings.FORGOT_PASS}
              style={styles.passwordText}
            />
          </View>
          <CustomButton
            title={dictionary.SUBMIT_BUTTON_TEXT}
            onPressFunction={() => goToApi()}
          />
          <View style={styles.createAccountContainer}>
            <Text style={styles.createAccount}>{Strings.ARENT_REGISTERED}</Text>
            <Link
              url={URL}
              text={Strings.CREATE_ACCOUNT}
              style={styles.createAccount}
            />
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

export default Login;
