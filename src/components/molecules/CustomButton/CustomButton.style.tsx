import { Platform, StyleSheet } from 'react-native';
import Theme from '../../../infraestructure/theme';
import { PlatformStr } from '../../../assets/string';

const styles = (isPressed: boolean) =>
  StyleSheet.create({
    container: {
      borderRadius: 56,
      overflow: 'hidden',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      elevation: 3,
      backgroundColor:
        Platform.OS === PlatformStr.IOS
          ? 'transparent'
          : isPressed
          ? Theme.colors().COLOR_PRINCIPAL_95
          : Theme.colors().COLOR_PRINCIPAL,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color:
        Platform.OS === PlatformStr.IOS
          ? isPressed
            ? Theme.colors().COLOR_WHITE
            : Theme.colors().COLOR_PRINCIPAL
          : Theme.colors().COLOR_WHITE,
    },
  });

export default styles;
