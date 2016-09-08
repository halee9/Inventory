import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TouchButton extends Component {
  render() {
    let touchStyle = {
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: this.props.backgroundColor || '#eee',
    };
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="transparent"
        style={touchStyle}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>
          { this.props.icon ? <Text><Icon name={this.props.icon} size={20} color="#333" /></Text>
          : <Text></Text> }
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

export default TouchButton;
