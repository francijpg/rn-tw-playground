import React from 'react';
import { Image, ImageBackground, Platform, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { PlatformStr } from '../../../assets/string';
import Theme from '../../../infraestructure/theme';
import styles from './LoginHeader.style';

const imageBackground = require('../../../assets/image/headerRectangle.png');
const imageStroke = require('../../../assets/image/strokes.png');
const imageWoman = require('../../../assets/image/woman.png');

function LoginHeader() {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={imageBackground}
        resizeMode="cover"
        style={styles.backgroundHeader}>
        <Appbar.Header dark={true} style={styles.appbar}>
          <Appbar.BackAction onPress={() => {}} />
        </Appbar.Header>
        <Text style={[styles.baseTextStyle, styles.welcomeText]}>
          Bienvenida!
        </Text>
        <Text style={[styles.baseTextStyle]}>
          Estamos felices de que estés con nosotro. tenemos grandes ofertas y
          descuentos para ti, ¡que no te puedes perder!
        </Text>
        <Text style={[styles.baseTextStyle, styles.loginText]}>LOG IN</Text>
      </ImageBackground>
      <Image source={imageStroke} style={styles.stroke} />
      <Image source={imageWoman} style={styles.womanImage} />
    </View>
  );
}

export default LoginHeader;
