import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  containerImage: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
    marginTop: 20,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  cardContent: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  source: {
    color: '#e63946',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default styles;
