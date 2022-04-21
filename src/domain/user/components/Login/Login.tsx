import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Colors } from '../../../../assets/colors';
import { RoutesStr, Strings } from '../../../../assets/string';
import CustomButton from '../../../../components/molecules/CustomButton';
import Link from '../../../../components/atoms/Link';
import TextInputIcon from '../../../../components/molecules/TextImputIcon/TextInputIcon';
import dictionary from '../../../../language/es/login.json';
import styles from './Login.style';
import LoginHeader from '../../../../components/organisms/LoginHeader/LoginHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Login = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const URL = 'https://google.com';
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.page}>
      <LoginHeader />
      <View style={styles.container}>
        <TextInputIcon
          title={dictionary.LOGIN_EMAIL_LABEL}
          icon="email-outline"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: '' })}
          placeholder="Email"
          autoCapitalize="none"
          maxLength={30}
        />
        <TextInputIcon
          title={dictionary.LOGIN_PASSWORD_LABEL}
          icon="lock-outline"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: '' })}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          maxLength={20}
        />
        <View style={styles.passwordContainer}>
          <Checkbox.Item
            label="Recordarme"
            status="checked"
            color={Colors.COLOR_PRINCIPAL}
            position="leading"
          />
          <Link url={URL} text={Strings.FORGOT_PASS} style={styles.link} />
        </View>
        <CustomButton
          title={dictionary.SUBMIT_BUTTON_TEXT}
          onPressFunction={() => navigation.navigate(RoutesStr.API_SCREEN)}
        />
      </View>
    </View>
  );
};

export default Login;
