import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../../../components/molecules/CustomButton';

const Debug = () => (
  <View style={styles.base}>
    <CustomButton title="Prueba" />
  </View>
);

const styles = StyleSheet.create({
  base: {
    alignContent: 'center',
    marginTop: '50%',
    paddingHorizontal: 100,
  },
});

export default Debug;
