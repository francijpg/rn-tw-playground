import { Platform, StyleSheet } from 'react-native';
import { PlatformStr } from '../../../assets/string';
import Theme from '../../../infraestructure/theme';

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  backgroundHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  baseTextStyle: {
    color: 'white',
    display: 'flex',
    alignSelf: 'flex-start',
    marginStart: 40,
    fontSize: 15,
    fontWeight: '600',
    marginEnd: 60,
    zIndex: 1,
  },
  welcomeText: {
    fontSize: 28,
    marginStart: 60,
    fontWeight: '700',
  },
  loginText: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '900',
  },
  appbar: {
    backgroundColor: 'transparent',
    elevation: 0,
    marginTop: 15,
    marginStart: 15,
  },
  womanImage: {
    zIndex: 0,
    top: Platform.OS === PlatformStr.IOS ? 90 : 50,
    height: 300,
    resizeMode: 'contain',
    right: 20,
    bottom: 0,
    tintColor: Theme.colors().COLOR_PRINCIPAL,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  stroke: {
    zIndex: 0,
    top: Platform.OS === PlatformStr.IOS ? 90 : 50,
    right: 20,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default styles;
