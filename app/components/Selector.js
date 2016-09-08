import React, { PropTypes, Component } from 'react';
import {
  Picker,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import _ from 'lodash';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#ddd',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  picker: {
    backgroundColor: '#eee',
  },
  close: {
    padding: 10,
    textAlign: 'right',
    color: '#fff'
  }
});

const Selector = (props) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={props.onPressClose}>
      <Text style={styles.close}>Close</Text>
    </TouchableHighlight>
    <Picker
      style={styles.picker}
      selectedValue={props.selectedValue}
      onValueChange={props.onValueChange}>
      { _.map(props.values, (value, index) => <Picker.Item key={index} label={value} value={value} />) }
    </Picker>
  </View>
);

export default Selector;
