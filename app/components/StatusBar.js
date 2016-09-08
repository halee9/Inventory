'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles')
const { StyleSheet, Text, View} = ReactNative;

const StatusBar = ({ title }) => (
  <View>
    <View style={styles.statusbar}/>
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>{ title }</Text>
    </View>
  </View>
);

module.exports = StatusBar;
