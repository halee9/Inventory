import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: 'center',
    backgroundColor: '#555',
  },
  text: {
    fontSize: 14,
    color: '#eee',
    fontWeight: 'bold',
  },
});

const SectionHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.sectionName}</Text>
  </View>
);

export default SectionHeader;
