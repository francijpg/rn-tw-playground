import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  passwordContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  page: {
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    marginVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 10,
  },
  passwordText: {
    fontSize: 13,
  },
  inputText: {
    marginTop: 15,
  },
  createAccount: {
    marginRight: 10,
    fontSize: 12,
  },
  checkbox: {
    paddingLeft: 0,
  },
});

export default styles;
