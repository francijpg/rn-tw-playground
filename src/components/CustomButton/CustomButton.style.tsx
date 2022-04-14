import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../assets/colors';
import { PlatformStr } from '../../assets/string';

const styles = (isPressed: boolean) =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      borderRadius: 56,
      elevation: 3,
      backgroundColor:
        Platform.OS === PlatformStr.IOS
          ? 'transparent'
          : isPressed
          ? Colors.COLOR_PRINCIPAL_95
          : Colors.COLOR_PRINCIPAL,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color:
        Platform.OS === PlatformStr.IOS
          ? isPressed
            ? Colors.COLOR_WHITE
            : Colors.COLOR_PRINCIPAL
          : Colors.COLOR_WHITE,
    },
  });

export default styles;
