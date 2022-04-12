import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
// import Buttom from '../../../components/Buttom';
import {Button as AtomButton} from 'react-native';

const Login = (item: any) => {
  return (
    <View style={styles.appointment}>
      <View>
        <Text style={styles.label}>Patient: </Text>
        <Text style={styles.text}>{item.patient}</Text>
      </View>
      <View>
        <Text style={styles.label}>Owner: </Text>
        <Text style={styles.text}>{item.owner}</Text>
      </View>
      <View>
        <Text style={styles.label}>Symptoms: </Text>
        <Text style={styles.text}>{item.symptom}</Text>
      </View>
      <AtomButton title="login" />
      <View>
        <TouchableHighlight style={styles.btnDelete}>
          <Text style={styles.textDelete}> Delete &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appointment: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textDelete: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
