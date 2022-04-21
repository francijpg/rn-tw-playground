import { Fonts } from 'react-native-paper/lib/typescript/types';

const _fonts: Fonts = {
  regular: {
    fontFamily: 'lato-regular',
  },
  medium: {
    fontFamily: 'lato-regular',
  },
  light: {
    fontFamily: 'lato-regular',
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
