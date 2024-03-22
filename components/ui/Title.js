import React, { Children } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 8,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 10,
    maxWidth: '80%',
    width: 300,
  },
});
