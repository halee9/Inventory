import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import TouchButton from './TouchButton';

const container = {
  flex: 1,
  flexDirection: "column",
  width: undefined,
  height: undefined,
  backgroundColor:'transparent',
  //justifyContent: 'center',
  alignItems: 'center'
};

const button = {
  fontSize: 24,
  //textAlign: 'center',
  paddingLeft: 40,
  paddingTop: 16,
  paddingBottom: 16,
  backgroundColor: 'transparent',
  width: 300,
  margin: 5,
  borderRadius: 10,
  borderColor: '#eee',
  color: '#fff',
  fontWeight: 'bold',
  borderWidth: 2,
};

const Home = () => (
  <Image
    source={require('./img/images/home2.jpg')}
    style={container}>
      <View style={{flex:3,justifyContent: 'center'}}>
        <Text style={{color: '#eee', textAlign: 'center', fontSize: 40, fontWeight: 'bold'}}>MIDORI</Text>
        <Text style={{color: '#eee', textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>INVENTORY</Text>
      </View>
      <TouchableHighlight onPress={Actions.Cart} style={{flex:1}} underlayColor="transparent">
        <Text style={button}><Icon name="shopping-cart" size={24} color="#fff" />   Shopping List</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={Actions.List} style={{flex:1}} underlayColor="transparent">
        <Text style={button}><Icon name="list" size={24} color="#fff" />   Inventory List</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={Actions.Camera} style={{flex:1}} underlayColor="transparent">
        <Text style={button}><Icon name="file-text-o" size={24} color="#fff" />   Purchased List</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={Actions.Photo} style={{flex:1}} underlayColor="transparent">
        <Text style={button}><Icon name="camera" size={24} color="#fff" />   Snapshot</Text>
      </TouchableHighlight>
      <View style={{flex:3,justifyContent: 'center'}}>
        <Text style={{ color: '#fff', textAlign: 'center'}}>Version 0.00001</Text>
      </View>
  </Image>
);

export default Home;
