import { StyleSheet } from 'react-native';
import { Colors } from '../../../../assets/colors';

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  page: {
    height: '100%',
  },
  upperContainer: {
    flexDirection: 'column',
    height: '40%',
    width: '100%',
    backgroundColor: Colors.COLOR_PRINCIPAL,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    margin: 20,
    paddingHorizontal: 10,
  },
  link: {
    fontSize: 14,
  },
  checkbox: {
    fontSize: 14,
  },
});

export default styles;
