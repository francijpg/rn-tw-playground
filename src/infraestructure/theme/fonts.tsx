import { Fonts } from 'react-native-paper/lib/typescript/types';

const _fonts: Fonts = {
  regular: {
    fontFamily: 'lato-regular',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'lato-regular',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'lato-regular',
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: 'lato-regular',
    fontWeight: 'normal',
  },
};

export default function getFonts() {
  return {
    ios: _fonts,
    android: _fonts,
  };
}
